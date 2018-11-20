import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { EpisodeService } from '../../shared/services/episode.service';
import { Episode } from '../../shared/models/episode.model';
import { Actor } from '../../shared/models/actor.model';
import * as globals from '../../shared/globals';

@Component({
  selector: 'app-episode',
  templateUrl: './episode.component.html',
  styleUrls: ['./episode.component.css']
})
export class EpisodeComponent implements OnInit {

  episode: Episode;
  actors: Actor[];
  showRating = false;

  ratingMessage = globals.ratingMessage;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private episodeService: EpisodeService
  ) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    this.episodeService.getEpisode(+id).subscribe(r => { this.episode = r;
      this.episodeService.getEpisodeActors(this.episode.id).subscribe(r => this.actors = r);
    });
  }

  createRating(): void {
    this.showRating = true;
  }

  addRating(rating: number): void {
    this.episodeService.changeRating(this.episode.id, rating).subscribe(() => { this.showRating = false;
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
