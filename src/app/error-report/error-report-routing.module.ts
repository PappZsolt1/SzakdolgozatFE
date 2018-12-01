import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NewErrorReportComponent } from './new-error-report/new-error-report.component';
import { ErrorReportListComponent } from './error-report-list/error-report-list.component';
import { ErrorReportShellComponent } from './error-report-shell/error-report-shell.component';

import { AppAuthGuard } from '../shared/app-auth.guard';

const errorReportRoutes: Routes = [
  {
    path: '', component: ErrorReportShellComponent,
    children: [
      { path: 'new', component: NewErrorReportComponent,
      canActivate: [AppAuthGuard], data: { roles: ['RegisteredUser', 'Moderator', 'ArticleWriter'] } },
      { path: 'admin', component: ErrorReportListComponent,
      canActivate: [AppAuthGuard], data: { roles: ['Admin'] } },
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
