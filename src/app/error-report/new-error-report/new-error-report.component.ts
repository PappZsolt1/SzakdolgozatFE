import { Component, OnInit } from '@angular/core';

import { ErrorReportService } from '../error-report.service';

@Component({
  selector: 'app-new-error-report',
  templateUrl: './new-error-report.component.html',
  styleUrls: ['./new-error-report.component.css']
})
export class NewErrorReportComponent implements OnInit {

  sent = false;

  constructor(private errorReportService: ErrorReportService) { }

  ngOnInit() {
  }
  
  addErrorReport(content: string): void {
    this.sent = true;
    this.errorReportService.addErrorReport(content).subscribe();    
  }

  startNew() {
    this.sent = false;
  }
}
