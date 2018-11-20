import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { MovieService } from '../../shared/services/movie.service';
import { ActorService } from '../../shared/services/actor.service';
import { Actor } from '../../shared/models/actor.model';
import * as globals from '../../shared/globals';

@Component({
  selector: 'app-edit-movie-actors',
  templateUrl: './edit-movie-actors.component.html',
  styleUrls: ['./edit-movie-actors.component.css']
})
export class EditMovieActorsComponent implements OnInit {

  actors: Actor[] = [];
  actor: Actor;
  movieId: number;
  showActors = false;
  error1 = false;
  error2 = false;
  error3 = false;

  idMessage = globals.idMessage;

  constructor(
    private location: Location,
    private route: ActivatedRoute,
    private movieService: MovieService,
    private actorService: ActorService
    ) { }

  ngOnInit() {
    let id = +this.route.snapshot.paramMap.get("id");
    if (id) {
      this.movieId = id;
      this.getMovieActors();
    }
  }

  getMovieActors(): void {
    let exists = false;
    this.movieService.checkIfExists(this.movieId).subscribe(r => {
      exists = r;
      if (exists) {
        this.movieService.getMovieActors(this.movieId).subscribe(r => { this.actors = r; this.showActors = true; });
      } else {
        this.error1 = true;
        setTimeout(() => { this.error1 = false; }, 5000);
      }
    });
  }

  addActorToMovie(actorId: number): void {
    let exists = false;
    this.actorService.checkIfExists(actorId).subscribe(r => {
      exists = r;
      if (exists) {
        this.actorService.getActor(actorId).subscribe(r => {
          this.actor = r;
          if (!this.actors.some(a => a.id === this.actor.id)) {
            this.movieService.addActorToMovie(this.movieId, actorId).subscribe(() => {
              this.movieService.getMovieActors(this.movieId).subscribe(r => this.actors = r); });
          } else {
            this.error3 = true;
            setTimeout(() => { this.error3 = false; }, 5000);
          }
        });
        } else {
        this.error2 = true;
        setTimeout(() => { this.error2 = false; }, 5000);
      }
    });
  }

  removeActorFromMovie(actorId: number): void {
    this.movieService.removeActorFromMovie(this.movieId, actorId).subscribe(r => {
      this.movieService.getMovieActors(this.movieId).subscribe(r => this.actors = r);
    });
  }

  goBack() {
    this.location.back();
  }
}
