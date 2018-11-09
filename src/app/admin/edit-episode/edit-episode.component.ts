import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { EpisodeService } from '../../shared/services/episode.service';
import { Episode } from '../../shared/models/episode.model';
import { dateFormatter } from '../shared/date-formatter';
import { lengthFormatter } from '../shared/length-formatter';

@Component({
  selector: 'app-episode',
  templateUrl: './edit-episode.component.html',
  styleUrls: ['./edit-episode.component.css']
})
export class EditEpisodeComponent implements OnInit {

  episode: Episode = { id: null, eLength: null, title: null, rating: null, numberOfRatings: null, releaseDate: null, sumOfRatings: null, actors: null, comments: null }
  rDate: string;
  saved = false;

  hours: number;
  minutes: number;

  constructor(private location: Location, private episodeService: EpisodeService) { }

  ngOnInit() {
  }

  addEpisode(): void {
    this.episode.releaseDate = dateFormatter(this.rDate);
    this.episode.eLength = lengthFormatter(this.hours, this.minutes);
    this.episode.title = this.episode.title.trim();
    this.episodeService.addEpisode(this.episode).subscribe(() => this.saved = true);
  }

  goBack() {
    this.location.back();
  }
}
