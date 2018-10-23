import { Component, OnInit } from '@angular/core';

import { MovieService } from '../../shared/services/movie.service';
import { Movie } from '../../shared/models/movie.model';
import { AgeClassificationService } from '../../shared/services/age-classification.service';
import { AgeClassification } from '../../shared/models/age-classification.model';
import { GenreService } from '../../shared/services/genre.service';
import { Genre } from '../../shared/models/genre.model';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  movie: Movie = { id: null, title: null, ageClassification: null, budget: null, genre: null, coverPicture: null, length: null, releaseYear: null, numberOfRatings: null, sumOfRatings: null, rating: null, actors: null, comments: null }
  ageClassifications: AgeClassification[];
  genres: Genre[];
  
  constructor(
    private movieService: MovieService,
    private ageClassificationService: AgeClassificationService,
    private genreService: GenreService
    ) { }

  ngOnInit() {
    this.getAllAgeClassifications();
    this.getAllGenres();
  }

  addMovie(): void {
    this.movieService.addMovie(this.movie).subscribe();
  }

  getAllAgeClassifications(): void {
    this.ageClassificationService.getAllAgeClassifications().subscribe(r => this.ageClassifications = r);
  }

  getAllGenres(): void {
    this.genreService.getAllGenres().subscribe(r => this.genres = r);
  }
}
