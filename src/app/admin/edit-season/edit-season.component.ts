import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { SeasonService } from '../../shared/services/season.service';
import { Season } from '../../shared/models/season.model';
import { SeriesService } from '../../shared/services/series.service';

@Component({
  selector: 'app-season',
  templateUrl: './edit-season.component.html',
  styleUrls: ['./edit-season.component.css']
})
export class EditSeasonComponent implements OnInit {

  season: Season = { id: null, number: null, episodes: null }
  seriesId: number;
  saved = false;
  modify = false;
  error1 = false;
  error2 = false;
  deleted = false;

  constructor(
    private location: Location,
    private route: ActivatedRoute,
    private seasonService: SeasonService,
    private seriesService: SeriesService
    ) { }

  ngOnInit() {
    let id = +this.route.snapshot.paramMap.get("id");
    if (id) {
      this.seasonService.getSeason(id).subscribe(r => { this.season = r; this.modify = true;
        this.seriesId = +this.route.snapshot.paramMap.get("seriesId");
      });
    }
  }

  addSeason(): void {
    let exists = false;
    this.seriesService.checkIfExists(this.seriesId).subscribe(r => {
      exists = r;
      if (exists) {
        this.seasonService.addSeason(this.seriesId, this.season).subscribe(() => this.saved = true);
      } else {
        this.error1 = true;
        setTimeout(() => { this.error1 = false; }, 5000);
      }
    });
  }

  modifySeason(): void {
    this.seasonService.modifySeason(this.season).subscribe(() => this.saved = true);
  }

  deleteSeason(): void {
    let removable = false;
    this.seasonService.canBeDeleted(this.season.id).subscribe(r => {
      removable = r;
      if (removable) {
        let answer = confirm("Biztosan törli?");
        if (answer) {
          this.seasonService.deleteSeason(this.seriesId, this.season.id).subscribe(() => this.deleted = true);
        }
      } else {
        this.error2 = true;
        setTimeout(() => { this.error2 = false; }, 5000);
      }
    });
  }

  goBack() {
    this.location.back();
  }
}
