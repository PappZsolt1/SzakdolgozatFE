import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NewErrorReportComponent } from './new-error-report/new-error-report.component';
import { ErrorReportListComponent } from './error-report-list/error-report-list.component';
import { ErrorReportShellComponent } from './error-report-shell/error-report-shell.component';

const errorReportRoutes: Routes = [
  {
    path: '', component: ErrorReportShellComponent,
    children: [
      { path: 'new', component: NewErrorReportComponent },
      { path: 'admin', component: ErrorReportListComponent }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(errorReportRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class ErrorReportRoutingModule { }
