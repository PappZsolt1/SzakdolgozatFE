import { Component, OnInit } from '@angular/core';

import { EpisodeService } from '../../shared/services/episode.service';
import { Episode } from '../../shared/models/episode.model';

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

  dateFormatter(bDate: string): string {
    let slash = bDate.indexOf("-");
    return bDate.substring(0, slash) + ". " + bDate.substr(slash + 1, 2) + ". " + bDate.substr(slash + 4, 2) + ".";
  }

  timeFormatter(hours: number, minutes: number, seconds: number): string {
    return (hours > 0 ? hours.toString() + " óra " : "")  + minutes.toString() + " perc " + seconds.toString() + " másodperc";
  }

  addEpisode(): void {
    this.episode.releaseDate = this.dateFormatter(this.bDate);
    this.episode.eLength = this.timeFormatter(this.hours, this.minutes, this.seconds);
    this.episodeService.addEpisode(this.episode).subscribe();
  }
}
