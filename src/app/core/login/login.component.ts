import { Component, OnInit } from '@angular/core';

import { KeycloakService } from 'keycloak-angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private k: KeycloakService) { }

  ngOnInit() {
  }

  onSubmit() {}

  login() {
    this.k.login();
  }

  logout() {
    this.k.logout();
  }

}
