import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { EpisodeService } from '../../shared/services/episode.service';
import { ActorService } from '../../shared/services/actor.service';
import { Actor } from '../../shared/models/actor.model';
import * as globals from '../../shared/globals';

@Component({
  selector: 'app-edit-episode-actors',
  templateUrl: './edit-episode-actors.component.html',
  styleUrls: ['./edit-episode-actors.component.css']
})
export class EditEpisodeActorsComponent implements OnInit {

  actors: Actor[] = [];
  actor: Actor;
  episodeId: number;
  showActors = false;
  error1 = false;
  error2 = false;
  error3 = false;

  idMessage = globals.idMessage;

  constructor(
    private location: Location,
    private route: ActivatedRoute,
    private episodeService: EpisodeService,
    private actorService: ActorService
  ) { }

  ngOnInit() {
    let id = +this.route.snapshot.paramMap.get("id");
    if (id) {
      this.episodeId = id;
      this.getEpisodeActors();
    }
  }

  getEpisodeActors(): void {
    let exists = false;
    this.episodeService.checkIfExists(this.episodeId).subscribe(r => {
      exists = r;
      if (exists) {
        this.episodeService.getEpisodeActors(this.episodeId).subscribe(r => { this.actors = r; this.showActors = true; });
      } else {
        this.error1 = true;
        setTimeout(() => { this.error1 = false; }, 5000);
      }
    });
  }

  addActorToEpisode(actorId: number): void {
    let exists = false;
    this.actorService.checkIfExists(actorId).subscribe(r => {
      exists = r;
      if (exists) {
        this.actorService.getActor(actorId).subscribe(r => {
          this.actor = r;
          if (!this.actors.some(a => a.id === this.actor.id)) {
            this.episodeService.addActorToEpisode(this.episodeId, actorId).subscribe(() => {
              this.episodeService.getEpisodeActors(this.episodeId).subscribe(r => this.actors = r); });
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

  removeActorFromEpisode(actorId: number): void {
    this.episodeService.removeActorFromEpisode(this.episodeId, actorId).subscribe(r => {
      this.episodeService.getEpisodeActors(this.episodeId).subscribe(r => this.actors = r);
    });
  }

  goBack() {
    this.location.back();
  }
}
