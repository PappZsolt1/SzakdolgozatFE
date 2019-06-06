import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { TopicComponent } from './topic.component';
import { FormsModule } from '@angular/forms';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TopicService } from '../shared/topic.service';
import { KeycloakService } from 'keycloak-angular';
import { convertToParamMap, ActivatedRoute } from '@angular/router';
import { BsModalService } from 'ngx-bootstrap/modal';
import { Location } from '@angular/common';
import { of } from 'rxjs';
import { Topic } from '../shared/topic.model';

describe('TopicComponent', () => {
  let component: TopicComponent;
  let fixture: ComponentFixture<TopicComponent>;

  let keycloakService = jasmine.createSpyObj("KeycloakService", ["isUserInRole"]);
  let isUserInRoleSpy;

  let topicService = jasmine.createSpyObj("TopicService", ["getTopic", "deleteTopic"]);
  let getTopicSpy;
  let deleteTopicSpy;

  let location = jasmine.createSpyObj("Location", ["back"]);
  let backSpy = location.back;

  let modalService = jasmine.createSpyObj("BsModalService", ["show"]);
  let showSpy = modalService.show.and.returnValue();

  let topic: Topic = { id: null, title: "cím", description: null, createDate: null, username: null, comments: null };


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule ],
      declarations: [ TopicComponent ],
      providers: [
        { provide: Location, useValue: location },
        { provide: KeycloakService, useValue: keycloakService },
        { provide: TopicService, useValue: topicService },
        { provide: BsModalService, useValue: modalService },
        { provide: ActivatedRoute, useValue:{snapshot:{paramMap:convertToParamMap({id:'1'})}}}
      ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopicComponent);
    component = fixture.componentInstance;

    isUserInRoleSpy = keycloakService.isUserInRole.and.returnValue(true);
    getTopicSpy = topicService.getTopic.and.returnValue(of(topic));
    deleteTopicSpy = topicService.deleteTopic.and.returnValue();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getTopic on init', () => {
    expect(getTopicSpy.calls.any()).toBe(true);
  });

  it('should getTopic load data on init', fakeAsync(() => {
    tick();
    expect(component.topic.title).toBe("cím");
  }));

  it('should Téma törlése button show modal', fakeAsync(() => {
    component.canDo = true;
    fixture.detectChanges();
    tick();
    let button = fixture.nativeElement.querySelector("button");
    expect(button.textContent).toBe("Téma törlése");
    button.click();
    expect(showSpy.calls.any()).toBe(true);
  }));

  it('should Vissza button call location.back', () => {
    component.canDo = false;
    fixture.detectChanges();
    let button = fixture.nativeElement.querySelector("button");
    expect(button.textContent).toBe("Vissza");
    button.click();
    expect(backSpy).toHaveBeenCalled();
  });
});
