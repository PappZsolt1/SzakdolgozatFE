import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ArticlesModule } from './articles/articles.module';
import { CoreModule } from './core/core.module';

import { KeycloakService, KeycloakAngularModule } from 'keycloak-angular';
import { initializer } from './app-init';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ArticlesModule,
    AppRoutingModule,
    CoreModule,
    KeycloakAngularModule
  ],
  providers: [
    /*{
      provide: APP_INITIALIZER,
      useFactory: initializer,
      multi: true,
      deps: [KeycloakService]
    }*/
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
