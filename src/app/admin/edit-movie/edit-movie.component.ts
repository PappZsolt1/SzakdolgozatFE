import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { MovieService } from '../../shared/services/movie.service';
import { Movie } from '../../shared/models/movie.model';
import { AgeClassificationService } from '../../shared/services/age-classification.service';
import { AgeClassification } from '../../shared/models/age-classification.model';
import { GenreService } from '../../shared/services/genre.service';
import { Genre } from '../../shared/models/genre.model';
import { lengthFormatter } from '../shared/length-formatter';

@Component({
  selector: 'app-movie',
  templateUrl: './edit-movie.component.html',
  styleUrls: ['./edit-movie.component.css']
})
export class EditMovieComponent implements OnInit {

  movie: Movie = { id: null, title: null, ageClassification: null, budget: null, genre: null, coverPicture: null, mLength: null, releaseYear: null, numberOfRatings: null, sumOfRatings: null, rating: null, actors: null, comments: null }
  ageClassifications: AgeClassification[];
  genres: Genre[];

  hours: number;
  minutes: number;
  
  constructor(
    private location: Location,
    private movieService: MovieService,
    private ageClassificationService: AgeClassificationService,
    private genreService: GenreService
    ) { }

  ngOnInit() {
    this.getAllAgeClassifications();
    this.getAllGenres();
  }

  addMovie(): void {
    this.movie.mLength = lengthFormatter(this.hours, this.minutes);
    this.movieService.addMovie(this.movie).subscribe();
  }

  getAllAgeClassifications(): void {
    this.ageClassificationService.getAllAgeClassifications().subscribe(r => this.ageClassifications = r);
  }

  getAllGenres(): void {
    this.genreService.getAllGenres().subscribe(r => this.genres = r);
  }

  goBack() {
    this.location.back();
  }
}
