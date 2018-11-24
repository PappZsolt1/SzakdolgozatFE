import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Movie } from '../../shared/models/movie.model';
import { MovieService } from '../../shared/services/movie.service';
import { Actor } from '../../shared/models/actor.model';
import * as globals from '../../shared/globals';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  movie: Movie;
  actors: Actor[];
  showRating = false;
  type = "movie";
  rating = 1;

  ratingMessage = globals.ratingMessage;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private movieService: MovieService
  ) { }

  ngOnInit() {
    let id = +this.route.snapshot.paramMap.get('id');
    this.movieService.getMovie(id).subscribe(r => { this.movie = r;
      this.movieService.getMovieActors(this.movie.id).subscribe(r => this.actors = r);
    });
  }

  createRating(): void {
    this.showRating = true;
  }

  addRating(): void {
    this.movieService.changeRating(this.movie.id, this.rating).subscribe(() => { this.showRating = false;
      this.movieService.getMovie(this.movie.id).subscribe(r => this.movie = r);
    });
  }

  cancelRating(): void {
    this.showRating = false;
  }

  goBack() {
    this.location.back();
  }
}
