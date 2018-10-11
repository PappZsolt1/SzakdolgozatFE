import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ErrorReportRoutingModule } from './error-report-routing.module';
import { NewErrorReportComponent } from './new-error-report/new-error-report.component';
import { ErrorReportListComponent } from './error-report-list/error-report-list.component';
import { ErrorReportShellComponent } from './error-report-shell/error-report-shell.component';
import { ErrorReportService } from './shared/error-report.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ErrorReportRoutingModule
  ],
  declarations: [
    NewErrorReportComponent,
    ErrorReportListComponent,
    ErrorReportShellComponent
  ],
  providers: [
    ErrorReportService
  ]
})
export class ErrorReportModule { }
