import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ArticlesModule } from './articles/articles.module';
import { LoginComponent } from './login/login.component';
import { ErrorReportComponent } from './error-report/error-report.component';
import { UserService } from './user.service';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    LoginComponent,
    ErrorReportComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ArticlesModule,
    AppRoutingModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
