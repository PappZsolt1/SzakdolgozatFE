import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { SeriesService } from '../../shared/services/series.service';
import { Series } from '../../shared/models/series.model';
import { calculatePageFirst } from '../../shared/calculate-page-first';
import { calculatePageLast } from '../../shared/calculate-page-last';
import { calculatePage } from '../../shared/calculate-page';

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
  sizes = [10, 20, 30];
  pageFirst = 0;
  pageLast = 0;

  constructor(
    private location: Location,
    private seriesService: SeriesService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.text = this.route.snapshot.paramMap.get("text");
    this.getResultSeries();
  }

  onSizeChanged(): void {
    this.page = calculatePage(this.page, this.size, this.total);
    this.getResultSeries();
  }

  onPageChanged(event: any): void {
    this.page = event.page;
    this.size = event.itemsPerPage;
    this.getResultSeries();
  }

  getResultSeries(): void {
    this.seriesService.getResultSeries(this.page, this.size, this.text).subscribe(r => {
      this.series = r.results; this.total = r.total;
      this.pageFirst = calculatePageFirst(this.page, this.size, this.total);
      this.pageLast = calculatePageLast(this.page, this.size, this.total);
    });
  }

  goBack() {
    this.location.back();
  }
}
