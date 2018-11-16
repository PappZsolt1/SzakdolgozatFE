import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { SeriesService } from '../../shared/services/series.service';
import { Series } from '../../shared/models/series.model';

@Component({
  selector: 'app-series-list',
  templateUrl: './series-list.component.html',
  styleUrls: ['./series-list.component.css']
})
export class SeriesListComponent implements OnInit {

  series: Series[];

  constructor(
    private location: Location,
    private seriesService: SeriesService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    let text = this.route.snapshot.paramMap.get("text");
    this.seriesService.getResultSeries(text).subscribe(r => this.series = r);
  }

  goBack() {
    this.location.back();
  }
}
