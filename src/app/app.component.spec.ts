import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  let keycloakService = jasmine.createSpyObj("KeycloakService",
  ["getKeycloakInstance", "isLoggedIn", "getUsername", "getUserRoles", "login", "logout"]);
  let loginSpy = keycloakService.login;
  let logoutSpy = keycloakService.logout;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule ],
      declarations: [
        AppComponent
      ],
      providers: [{ provide: KeycloakService, useValue: keycloakService }],
      schemas: [ NO_ERRORS_SCHEMA ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should call login', () => {
    component.login();
    expect(loginSpy).toHaveBeenCalled();
  });

  it('should call logout', () => {
    component.logout();
    expect(logoutSpy).toHaveBeenCalled();
  });
});
