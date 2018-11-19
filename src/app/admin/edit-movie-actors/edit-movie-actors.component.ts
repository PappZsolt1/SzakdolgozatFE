import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { MovieService } from '../../shared/services/movie.service';
import { ActorService } from '../../shared/services/actor.service';
import * as globals from '../../shared/globals';

@Component({
  selector: 'app-edit-movie-actors',
  templateUrl: './edit-movie-actors.component.html',
  styleUrls: ['./edit-movie-actors.component.css']
})
export class EditMovieActorsComponent implements OnInit {

  actorIds: number[] = [];
  movieId: number;
  showActors = false;

  idMessage = globals.idMessage;

  constructor(
    private location: Location,
    private movieService: MovieService,
    private actorService: ActorService
    ) { }

  ngOnInit() {
  }

  getMovieActorIds(): void {}

  addActorToMovie(): void {}

  removeActorFromMovie(): void {}

  goBack() {
    this.location.back();
  }
}
