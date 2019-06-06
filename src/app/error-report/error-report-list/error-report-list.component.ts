import { Component, OnInit } from '@angular/core';

import { ErrorReport } from '../shared/error-report.model';
import { ErrorReportService } from '../shared/error-report.service';
import { calculatePageFirst } from '../../shared/calculate-page-first';
import { calculatePageLast } from '../../shared/calculate-page-last';
import { calculatePage } from '../../shared/calculate-page';

@Component({
  selector: 'app-error-report-list',
  templateUrl: './error-report-list.component.html',
  styleUrls: ['./error-report-list.component.css']
})
export class ErrorReportListComponent implements OnInit {

  errorReports: ErrorReport[];
  listType: string;
  total: number;
  page = 1;
  size = 10;
  sizes = [10, 20, 30];
  pageFirst = 0;
  pageLast = 0;
  show = false;

  constructor(private errorReportService: ErrorReportService) { }

  ngOnInit() {
  }

  onSizeChanged(): void {
    this.page = calculatePage(this.page, this.size, this.total);
    this.getErrorReports();
  }

  onPageChanged(event: any): void {
    this.page = event.page;
    this.size = event.itemsPerPage;
    this.getErrorReports();
  }

  getErrorReports(): void {
    switch (this.listType) {
      case "all":
        this.getAllErrorReports();
        break;
      case "resolved":
        this.getResolvedErrorReports();
        break;
      case "notResolved":
        this.getNotResolvedErrorReports();
        break;
      default:
        break;
    }
  }

  getAllErrorReports(): void {
    this.listType = "all";
    this.errorReportService.getAllErrorReports(this.page, this.size).subscribe(r => {
      this.errorReports = r.results; this.total = r.total; this.show = true;
      this.pageFirst = calculatePageFirst(this.page, this.size, this.total);
      this.pageLast = calculatePageLast(this.page, this.size, this.total);
    });
  }

  getResolvedErrorReports(): void {
    this.listType = "resolved";
    this.errorReportService.getResolvedErrorReports(this.page, this.size).subscribe(r => {
      this.errorReports = r.results; this.total = r.total; this.show = true;
      this.pageFirst = calculatePageFirst(this.page, this.size, this.total);
      this.pageLast = calculatePageLast(this.page, this.size, this.total);
    });
  }

  getNotResolvedErrorReports(): void {
    this.listType = "notResolved";
    this.errorReportService.getNotResolvedErrorReports(this.page, this.size).subscribe(r => {
      this.errorReports = r.results; this.total = r.total; this.show = true;
      this.pageFirst = calculatePageFirst(this.page, this.size, this.total);
      this.pageLast = calculatePageLast(this.page, this.size, this.total);
    });
  }

  makeResolved(id: number): void {
    this.errorReportService.makeResolved(id).subscribe(() => {
      if (this.listType == "all") {
        this.getAllErrorReports();
      } else {
        this.getNotResolvedErrorReports();
      }
    });    
  }
}
