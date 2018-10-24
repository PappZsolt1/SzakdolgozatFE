import { Component, OnInit } from '@angular/core';

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
  bDate: string;

  hours: number;
  minutes: number;
  seconds: number;

  constructor(private episodeService: EpisodeService) { }

  ngOnInit() {
  }

  addEpisode(): void {
    this.episode.releaseDate = dateFormatter(this.bDate);
    this.episode.eLength = lengthFormatter(this.hours, this.minutes, this.seconds);
    this.episodeService.addEpisode(this.episode).subscribe();
  }
}
