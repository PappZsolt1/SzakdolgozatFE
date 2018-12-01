import { Component, OnInit } from '@angular/core';

import { KeycloakService } from 'keycloak-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  loggedIn = false;
  username = null;
  roles = null;
  
  constructor(private keycloak: KeycloakService) { }

  ngOnInit() {
    this.getInfo();
  }

  async getInfo() {
    if (this.keycloak.getKeycloakInstance) {
      this.loggedIn = await this.keycloak.isLoggedIn();
      if (this.loggedIn) {
        this.username = await this.keycloak.getUsername();
        this.roles = await this.keycloak.getUserRoles();
      }
    }
  }

  login(): void {
    this.keycloak.login();
  }

  logout(): void {
    this.keycloak.logout();
  }
}
