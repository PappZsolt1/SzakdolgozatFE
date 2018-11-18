import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { EpisodeService } from '../../shared/services/episode.service';
import { Episode } from '../../shared/models/episode.model';
import { dateFormatter } from '../shared/date-formatter';
import { lengthFormatter } from '../shared/length-formatter';
import { reverseLengthFormatter } from '../shared/reverse-length-formatter';
import { reverseDateFormatter } from '../shared/reverse-date-formatter';
import { SeasonService } from '../../shared/services/season.service';
import * as globals from '../../shared/globals';

@Component({
  selector: 'app-episode',
  templateUrl: './edit-episode.component.html',
  styleUrls: ['./edit-episode.component.css']
})
export class EditEpisodeComponent implements OnInit {

  episode: Episode = { id: null, eLength: null, title: null, rating: null, numberOfRatings: null, releaseDate: null, sumOfRatings: null, actors: null, comments: null }
  rDate: string;
  seasonId: number;
  saved = false;
  modify = false;
  error1 = false;
  error2 = false;
  deleted = false;

  hours: number;
  minutes: number;

  inputTextMessage = globals.inputTextMessage;
  releaseDateMessage = globals.releaseDateMessage;
  lengthMessage = globals.lengthMessage;
  idMessage = globals.idMessage;

  constructor(
    private location: Location,
    private route: ActivatedRoute,
    private episodeService: EpisodeService,
    private seasonService: SeasonService
    ) { }

  ngOnInit() {
    let id = +this.route.snapshot.paramMap.get("id");
    if (id) {
      this.episodeService.getEpisode(id).subscribe(r => { this.episode = r;
        this.hours = reverseLengthFormatter(this.episode.eLength)[0];
        this.minutes = reverseLengthFormatter(this.episode.eLength)[1];
        this.rDate = reverseDateFormatter(this.episode.releaseDate);
        this.modify = true;
        this.episodeService.getEpisodeSeasonId(id).subscribe(r => this.seasonId = r);
      });
    }
  }

  addEpisode(): void {
    let exists = false;
    this.seasonService.checkIfExists(this.seasonId).subscribe(r => {
      exists = r;
      if (exists) {
        this.episode.releaseDate = dateFormatter(this.rDate);
        this.episode.eLength = lengthFormatter(this.hours, this.minutes);
        this.episodeService.addEpisode(this.seasonId, this.episode).subscribe(() => this.saved = true);
      } else {
        this.error1 = true;
        setTimeout(() => { this.error1 = false; }, 5000);
      }
    });
  }

  modifyEpisode(): void {
    let exists = false;
    this.seasonService.checkIfExists(this.seasonId).subscribe(r => {
      exists = r;
      if (exists) {
        this.episode.releaseDate = dateFormatter(this.rDate);
        this.episode.eLength = lengthFormatter(this.hours, this.minutes);
        this.episodeService.modifyEpisode(this.seasonId, this.episode).subscribe(() => this.saved = true);
      } else {
        this.error1 = true;
        setTimeout(() => { this.error1 = false; }, 5000);
      }
    });
  }

  deleteEpisode(): void {
    let removable = false;
    this.episodeService.canBeDeleted(this.episode.id).subscribe(r => {
      removable = r;
      if (removable) {
        let answer = confirm("Biztosan törli?");
        if (answer) {
          this.episodeService.deleteEpisode(this.seasonId, this.episode.id).subscribe(() => this.deleted = true);
        }
      } else {
        this.error2 = true;
        setTimeout(() => { this.error2 = false; }, 5000);
      }
    });
  }

  goBack() {
    if (!this.deleted) {
      this.location.back();
    } else {
      window.history.go(-2);
    }
  }
}
