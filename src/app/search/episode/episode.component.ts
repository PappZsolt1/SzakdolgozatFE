import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { EpisodeService } from '../../shared/services/episode.service';
import { Episode } from '../../shared/models/episode.model';

@Component({
  selector: 'app-episode',
  templateUrl: './episode.component.html',
  styleUrls: ['./episode.component.css']
})
export class EpisodeComponent implements OnInit {

  episode: Episode;
  seasonId: number;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private episodeService: EpisodeService
  ) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    this.seasonId = +this.route.snapshot.paramMap.get('seasonId');
    this.episodeService.getEpisode(+id).subscribe(r => this.episode = r);
  }

  goBack() {
    this.location.back();
  }
}
