import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { MovieService } from '../../shared/services/movie.service';
import { Movie } from '../../shared/models/movie.model';
import { AgeClassificationService } from '../../shared/services/age-classification.service';
import { AgeClassification } from '../../shared/models/age-classification.model';
import { GenreService } from '../../shared/services/genre.service';
import { Genre } from '../../shared/models/genre.model';
import { lengthFormatter } from '../shared/length-formatter';
import { reverseLengthFormatter } from '../shared/reverse-length-formatter';
import * as globals from '../../shared/globals';

@Component({
  selector: 'app-movie',
  templateUrl: './edit-movie.component.html',
  styleUrls: ['./edit-movie.component.css']
})
export class EditMovieComponent implements OnInit {

  movie: Movie = { id: null, title: null, ageClassification: null, budget: null, genre: null, coverPicture: null, mLength: null, releaseYear: null, numberOfRatings: null, sumOfRatings: null, rating: null, actors: null, comments: null }
  ageClassifications: AgeClassification[];
  genres: Genre[];
  saved = false;
  modify = false;

  hours: number;
  minutes: number;

  inputTextMessage = globals.inputTextMessage;
  releaseYearMessage = globals.releaseYearMessage;
  selectMessage = globals.selectMessage;
  lengthMessage = globals.lengthMessage;
  budgetMessage = globals.budgetMessage;
  
  constructor(
    private location: Location,
    private route: ActivatedRoute,
    private movieService: MovieService,
    private ageClassificationService: AgeClassificationService,
    private genreService: GenreService
    ) { }

  ngOnInit() {
    let id = +this.route.snapshot.paramMap.get("id");
    if (id) {
      this.movieService.getMovie(id).subscribe(r => { this.movie = r;
      this.hours = reverseLengthFormatter(this.movie.mLength)[0];
      this.minutes = reverseLengthFormatter(this.movie.mLength)[1];
      this.modify = true; this.getAllGenres(); this.getAllAgeClassifications();
      });
    } else {
      this.getAllAgeClassifications();
      this.getAllGenres();
    }
  }

  addMovie(): void {
    this.movie.mLength = lengthFormatter(this.hours, this.minutes);
    this.movieService.addMovie(this.movie).subscribe(() => this.saved = true);
  }

  modifyMovie():void {
    this.movie.mLength = lengthFormatter(this.hours, this.minutes);
    this.movieService.modifyMovie(this.movie).subscribe(() => this.saved = true);
  }

  getAllAgeClassifications(): void {
    this.ageClassificationService.getAllAgeClassifications().subscribe(r => this.ageClassifications = r);
  }

  getAllGenres(): void {
    this.genreService.getAllGenres().subscribe(r => this.genres = r);
  }

  compareGenres(g1: Genre, g2: Genre): boolean {
    return g1 && g2 ? g1.id === g2.id : g1 === g2;
  }

  compareAgeClassifications(a1: AgeClassification, a2: AgeClassification): boolean {
    return a1 && a2 ? a1.id === a2.id : a1 === a2;
  }

  goBack() {
    this.location.back();
  }
}
