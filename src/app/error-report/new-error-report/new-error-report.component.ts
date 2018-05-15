import { Component, OnInit } from '@angular/core';

import { ErrorReport } from '../../model/error-report';
import { ErrorReportService } from '../error-report.service';

@Component({
  selector: 'app-new-error-report',
  templateUrl: './new-error-report.component.html',
  styleUrls: ['./new-error-report.component.css']
})
export class NewErrorReportComponent implements OnInit {

  errorReport: ErrorReport;

  sent = false;

  constructor(private errorReportService: ErrorReportService) { }

  ngOnInit() {
  }
  
  addErrorReport(content: string): void {
    this.sent = true;
    //this.errorReport.content = content;    
    this.errorReportService.addErrorReport(content).subscribe();    
  }

  startNew() {
    this.sent = false;
  }
}
