import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import  {Location } from '@angular/common';

import { Series } from '../../shared/models/series.model';
import { SeriesService } from '../../shared/services/series.service';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {

  series: Series;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private seriesService: SeriesService
  ) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    this.seriesService.getSeries(+id).subscribe(r => this.series = r);
  }

  goBack() {
    this.location.back();
  }
}
