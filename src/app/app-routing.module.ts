import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';
import { LoginComponent } from './core/login/login.component';
import { RegistrationComponent } from './core/registration/registration.component';

import { AppAuthGuard } from './shared/app-auth.guard';

const appRoutes: Routes = [
  { path: 'forum', loadChildren: 'app/forum/forum.module#ForumModule' },
  { path: 'search', loadChildren: 'app/search/search.module#SearchModule' },
  { path: 'error-report', loadChildren: 'app/error-report/error-report.module#ErrorReportModule' },
  { path: 'admin', loadChildren: 'app/admin/admin.module#AdminModule',
  canActivate: [AppAuthGuard], data: { roles: ['Admin'] } },
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: '', redirectTo: '/articles', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
]

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [AppAuthGuard]
})
export class AppRoutingModule { }
