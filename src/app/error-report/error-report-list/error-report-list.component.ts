import { Component, OnInit } from '@angular/core';

import { ErrorReport } from '../../model/error-report';
import { ErrorReportService } from '../error-report.service';

@Component({
  selector: 'app-error-report-list',
  templateUrl: './error-report-list.component.html',
  styleUrls: ['./error-report-list.component.css']
})
export class ErrorReportListComponent implements OnInit {

  errorReports: ErrorReport[];
  listType: string;

  constructor(private errorReportService: ErrorReportService) { }

  ngOnInit() {
  }

  getAllErrorReports(): void {
    this.listType = "all";
    this.errorReportService.getAllErrorReports().subscribe(r => this.errorReports = r);
  }

  getResolvedErrorReports(): void {
    this.listType = "resolved";
    this.errorReportService.getResolvedErrorReports().subscribe(r => this.errorReports = r);
  }

  getNotResolvedErrorReports(): void {
    this.listType = "notResolved";
    this.errorReportService.getNotResolvedErrorReports().subscribe(r => this.errorReports = r);
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
