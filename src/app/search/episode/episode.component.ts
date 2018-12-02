import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { EpisodeService } from '../../shared/services/episode.service';
import { Episode } from '../../shared/models/episode.model';
import { Actor } from '../../shared/models/actor.model';
import { RatingService } from '../shared/rating.service';
import * as globals from '../../shared/globals';

import { KeycloakService } from 'keycloak-angular';

@Component({
  selector: 'app-episode',
  templateUrl: './episode.component.html',
  styleUrls: ['./episode.component.css']
})
export class EpisodeComponent implements OnInit {

  episode: Episode;
  actors: Actor[];
  showRating = false;
  type = "episode";
  rating = 1;
  error = false;

  ratingMessage = globals.ratingMessage;

  canDo1 = this.keycloak.isUserInRole("Admin");
  canDo2 = this.keycloak.isUserInRole("RegisteredUser") || this.keycloak.isUserInRole("Moderator");

  constructor(
    private keycloak: KeycloakService,
    private route: ActivatedRoute,
    private location: Location,
    private episodeService: EpisodeService,
    private ratingService: RatingService
  ) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    this.episodeService.getEpisode(+id).subscribe(r => { this.episode = r;
      this.episodeService.getEpisodeActors(this.episode.id).subscribe(r => this.actors = r);
    });
  }

  createRating(): void {
    let username = this.keycloak.getUsername();
    this.ratingService.canRateThisEpisode(this.episode.id, username).subscribe(r => {
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
    this.episodeService.changeRating(this.episode.id, this.rating, username).subscribe(() => { this.showRating = false;
      this.episodeService.getEpisode(this.episode.id).subscribe(r => this.episode = r);
    });
  }

  cancelRating(): void {
    this.showRating = false;
  }

  goBack() {
    this.location.back();
  }
}
