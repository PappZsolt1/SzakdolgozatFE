import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { ActorListComponent } from './actor-list.component';
import { ActorService } from '../../shared/services/actor.service';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { of } from 'rxjs';
import { Location } from '@angular/common';
import { Wrapper } from '../../shared/models/wrapper.model';

describe('ActorListComponent', () => {
  let component: ActorListComponent;
  let fixture: ComponentFixture<ActorListComponent>;

  let location = jasmine.createSpyObj("Location", ["back"]);
  let backSpy = location.back;

  let actorService = jasmine.createSpyObj("ActorService", ["getResultActors"]);
  let getResultActorsSpy;

  let wrapper: Wrapper = { results: null, total: 5 };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule ],
      declarations: [ ActorListComponent ],
      providers: [
        { provide: Location, useValue: location },
        { provide: ActorService, useValue: actorService },
        { provide: ActivatedRoute, useValue:{snapshot:{paramMap:convertToParamMap({text:'1'})}}}
      ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActorListComponent);
    component = fixture.componentInstance;

    getResultActorsSpy = actorService.getResultActors.and.returnValue(of(wrapper));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getResultActors and load data on init', fakeAsync(() => {
    expect(getResultActorsSpy.calls.any()).toBe(true);
    tick();
    expect(component.total).toBe(5);
  }));

  it('should Vissza button call location.back', () => {
    let button = fixture.nativeElement.querySelector("button");
    expect(button.textContent).toBe("Vissza");
    button.click();
    expect(backSpy).toHaveBeenCalled();
  });

  it('should onSizeChanged and onPageChanged call getAllTopics', () => {
    spyOn(component, "getResultActors");
    component.onSizeChanged();
    let a = {page: null, itemsPerPage: null};
    component.onPageChanged(a);
    expect(component.getResultActors).toHaveBeenCalledTimes(2);
  });
});
