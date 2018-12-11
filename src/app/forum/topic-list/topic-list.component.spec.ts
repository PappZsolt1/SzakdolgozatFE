import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { TopicListComponent } from './topic-list.component';
import { FormsModule } from '@angular/forms';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';
import { TopicService } from '../shared/topic.service';
import { RulesService } from '../../shared/services/rules.service';
import { of } from 'rxjs';
import { Rules } from '../../shared/models/rules.model';

describe('TopicListComponent', () => {
  let component: TopicListComponent;
  let fixture: ComponentFixture<TopicListComponent>;

  let keycloakService = jasmine.createSpyObj("KeycloakService", ["isUserInRole"]);
  let isUserInRoleSpy = keycloakService.isUserInRole.and.returnValue(true);

  let topicService = jasmine.createSpyObj("TopicService", ["getAllTopics"]);
  let getAllTopicsSpy;

  let rules: Rules = { id: null, content: "szabályok" };
  let rulesService = jasmine.createSpyObj("RulesService", ["getRules"]);
  let getRulesSpy = rulesService.getRules.and.returnValue(of(rules));

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule ],
      declarations: [ TopicListComponent ],
      providers: [
        { provide: KeycloakService, useValue: keycloakService },
        { provide: TopicService, useValue: topicService },
        { provide: RulesService, useValue: rulesService }
      ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopicListComponent);
    component = fixture.componentInstance;

    getAllTopicsSpy = topicService.getAllTopics.and.returnValue(of());
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getRules and getAllTopics on init', fakeAsync(() => {
    tick();
    expect(component.rules.content).toBe("szabályok");
    expect(getAllTopicsSpy.calls.any()).toBe(true);
  }));

  it('should button show and hide rules', () => {
    let button = fixture.nativeElement.querySelector("button");
    expect(button.textContent).toBe("Szabályzat mutatása");
    button.click();
    expect(component.showRules).toBe(true);
    fixture.detectChanges();
    button = fixture.nativeElement.querySelector("button");
    expect(button.textContent).toBe("Szabályzat elrejtése");
    button.click();
    expect(component.showRules).toBe(false);
  });

  it('should onSizeChanged and onPageChanged call getAllTopics', () => {
    spyOn(component, "getAllTopics");
    component.onSizeChanged();
    let a = {page: null, itemsPerPage: null};
    component.onPageChanged(a);
    expect(component.getAllTopics).toHaveBeenCalledTimes(2);
  });
});
