import { Component, OnInit } from '@angular/core';

import { ErrorReportService } from '../shared/error-report.service';

@Component({
  selector: 'app-new-error-report',
  templateUrl: './new-error-report.component.html',
  styleUrls: ['./new-error-report.component.css']
})
export class NewErrorReportComponent implements OnInit {

  ERcontent: string;
  sent = false;

  constructor(private errorReportService: ErrorReportService) { }

  ngOnInit() {
  }
  
  addErrorReport(): void {
    this.errorReportService.addErrorReport(this.ERcontent.trim()).subscribe(() => this.sent = true);    
  }

  startNew() {
    this.sent = false;
    this.ERcontent = "";
  }
}
