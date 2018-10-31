import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { SeasonService } from '../../shared/services/season.service';
import { Season } from '../../shared/models/season.model';

@Component({
  selector: 'app-season',
  templateUrl: './edit-season.component.html',
  styleUrls: ['./edit-season.component.css']
})
export class EditSeasonComponent implements OnInit {

  season: Season = { id: null, number: null, episodes: null }

  constructor(private location: Location, private seasonService: SeasonService) { }

  ngOnInit() {
  }

  addSeason(): void {
    this.seasonService.addSeason(this.season).subscribe();
  }

  goBack() {
    this.location.back();
  }
}
