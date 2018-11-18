import { Component, OnInit } from '@angular/core';

import { ErrorReportService } from '../shared/error-report.service';
import * as globals from '../../shared/globals';

@Component({
  selector: 'app-new-error-report',
  templateUrl: './new-error-report.component.html',
  styleUrls: ['./new-error-report.component.css']
})
export class NewErrorReportComponent implements OnInit {

  sent = false;

  textareaMessage = globals.textareaMessage;

  constructor(private errorReportService: ErrorReportService) { }

  ngOnInit() {
  }
  
  addErrorReport(content: string): void {
    this.errorReportService.addErrorReport(content).subscribe(() => this.sent = true);    
  }

  startNew() {
    this.sent = false;
  }
}
