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
  text: string;
  total: number;
  page = 1;
  size = 10;

  constructor(
    private location: Location,
    private seriesService: SeriesService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.text = this.route.snapshot.paramMap.get("text");
    this.seriesService.getResultSeries(this.page, this.size, this.text).subscribe(r => {
      this.series = r.results; this.total = r.total; });
  }

  onPageChanged(event: any): void {
    this.page = event.page;
    this.size = event.itemsPerPage;
    this.seriesService.getResultSeries(this.page, this.size, this.text).subscribe(r => {
      this.series = r.results; this.total = r.total; });
  }

  goBack() {
    this.location.back();
  }
}
