import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NewTopicComponent } from './new-topic.component';
import { FormsModule } from '@angular/forms';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Location } from '@angular/common';
import { KeycloakService } from 'keycloak-angular';
import { TopicService } from '../shared/topic.service';
import { of } from 'rxjs';

describe('NewTopicComponent', () => {
  let component: NewTopicComponent;
  let fixture: ComponentFixture<NewTopicComponent>;

  let keycloakService = jasmine.createSpyObj("KeycloakService", ["getUsername"]);
  let getUsernameSpy;

  let topicService = jasmine.createSpyObj("TopicService", ["addTopic"]);
  let addTopicSpy;

  let location = jasmine.createSpyObj("Location", ["back"]);
  let backSpy;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule ],
      declarations: [ NewTopicComponent ],
      providers: [
        { provide: Location, useValue: location },
        { provide: KeycloakService, useValue: keycloakService },
        { provide: TopicService, useValue: topicService }
      ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewTopicComponent);
    component = fixture.componentInstance;

    backSpy = location.back;
    addTopicSpy = topicService.addTopic.and.returnValue(of());
    getUsernameSpy = keycloakService.getUsername.and.returnValue();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should Létrehozás button call addTopic and getUsername', () => {
    let button = fixture.nativeElement.querySelector("button");
    expect(button.textContent).toBe("Létrehozás");
    button.click();
    expect(addTopicSpy.calls.count()).toBe(1);
    expect(getUsernameSpy.calls.count()).toBe(1);
  });

  it('should Vissza button call location.back', () => {
    let buttons = fixture.nativeElement.querySelectorAll("button");
    expect(buttons[1].textContent).toBe("Vissza");
    buttons[1].click();
    expect(backSpy.calls.any()).toBe(true);
  });
});
