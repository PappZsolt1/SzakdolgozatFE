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

  constructor(private errorReportService: ErrorReportService) { }

  ngOnInit() {
  }

}
