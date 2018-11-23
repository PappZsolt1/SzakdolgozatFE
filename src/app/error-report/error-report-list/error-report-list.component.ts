import { Component, OnInit } from '@angular/core';

import { ErrorReport } from '../shared/error-report.model';
import { ErrorReportService } from '../shared/error-report.service';

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

  constructor(private errorReportService: ErrorReportService) { }

  ngOnInit() {
  }

  onPageChanged(event: any): void {
    this.page = event.page;
    this.size = event.itemsPerPage;
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
      this.errorReports = r.results; this.total = r.total; });
  }

  getResolvedErrorReports(): void {
    this.listType = "resolved";
    this.errorReportService.getResolvedErrorReports(this.page, this.size).subscribe(r => {
      this.errorReports = r.results; this.total = r.total; });
  }

  getNotResolvedErrorReports(): void {
    this.listType = "notResolved";
    this.errorReportService.getNotResolvedErrorReports(this.page, this.size).subscribe(r => {
      this.errorReports = r.results; this.total = r.total; });
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
