import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ArticlesModule } from './articles/articles.module';
import { LoginComponent } from './login/login.component';
import { UserService } from './user.service';
import { RegistrationComponent } from './registration/registration.component';
import { ActorComponent } from './actor/actor.component';
import { ActorService } from './actor/actor.service';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    LoginComponent,
    RegistrationComponent,
    ActorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ArticlesModule,
    AppRoutingModule
  ],
  providers: [UserService, ActorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
