import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Movie } from '../../shared/models/movie.model';
import { MovieService } from '../../shared/services/movie.service';
import { Actor } from '../../shared/models/actor.model';
import { RatingService } from '../shared/rating.service';
import * as globals from '../../shared/globals';

import { KeycloakService } from 'keycloak-angular';

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
  error = false;

  ratingMessage = globals.ratingMessage;

  canDo1 = this.keycloak.isUserInRole("Admin");
  canDo2 = this.keycloak.isUserInRole("RegisteredUser") || this.keycloak.isUserInRole("Moderator");

  constructor(
    private keycloak: KeycloakService,
    private route: ActivatedRoute,
    private location: Location,
    private movieService: MovieService,
    private ratingService: RatingService
  ) { }

  ngOnInit() {
    let id = +this.route.snapshot.paramMap.get('id');
    this.movieService.getMovie(id).subscribe(r => { this.movie = r;
      this.movieService.getMovieActors(this.movie.id).subscribe(r => this.actors = r);
    });
  }

  createRating(): void {
    let username = this.keycloak.getUsername();
    this.ratingService.canRateThisMovie(this.movie.id, username).subscribe(r => {
      if (r) {
        this.showRating = true;
      } else {
        this.error = true;
        setTimeout(() => { this.error = false; }, 5000);
      }
    });
  }

  addRating(): void {
    let username = this.keycloak.getUsername();
    this.movieService.changeRating(this.movie.id, this.rating, username).subscribe(() => { this.showRating = false;
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
