import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActorComponent } from './actor.component';
import { FormsModule } from '@angular/forms';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { of } from 'rxjs';
import { Location } from '@angular/common';
import { ActorService } from '../../shared/services/actor.service';

describe('ActorComponent', () => {
  let component: ActorComponent;
  let fixture: ComponentFixture<ActorComponent>;

  let keycloakService = jasmine.createSpyObj("KeycloakService", ["isUserInRole"]);
  let isUserInRoleSpy = keycloakService.isUserInRole.and.returnValue(true);
  
  let location = jasmine.createSpyObj("Location", ["back"]);
  let backSpy = location.back;

  let actorService = jasmine.createSpyObj("ActorService", ["getActor"]);
  let getActorSpy;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule ],
      declarations: [ ActorComponent ],
      providers: [
        { provide: Location, useValue: location },
        { provide: KeycloakService, useValue: keycloakService },
        { provide: ActorService, useValue: actorService },
        { provide: ActivatedRoute, useValue:{snapshot:{paramMap:convertToParamMap({id:'1'})}}}
      ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActorComponent);
    component = fixture.componentInstance;

    getActorSpy = actorService.getActor.and.returnValue(of());
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getActor on init', () => {
    expect(getActorSpy.calls.any()).toBe(true);
  });

  it('should Vissza button call location.back', () => {
    let button = fixture.nativeElement.querySelector("button");
    expect(button.textContent).toBe("Vissza");
    button.click();
    expect(backSpy).toHaveBeenCalled();
  });
});
