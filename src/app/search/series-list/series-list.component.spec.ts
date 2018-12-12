import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SeriesListComponent } from './series-list.component';
import { FormsModule } from '@angular/forms';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { SeriesService } from '../../shared/services/series.service';
import { of } from 'rxjs';
import { Location } from '@angular/common';

describe('SeriesListComponent', () => {
  let component: SeriesListComponent;
  let fixture: ComponentFixture<SeriesListComponent>;

  let location = jasmine.createSpyObj("Location", ["back"]);
  let backSpy = location.back;

  let seriesService = jasmine.createSpyObj("SeriesService", ["getResultSeries"]);
  let getResultSeriesSpy = seriesService.getResultSeries.and.returnValue(of());
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule ],
      declarations: [ SeriesListComponent ],
      providers: [
        { provide: Location, useValue: location },
        { provide: SeriesService, useValue: seriesService },
        { provide: ActivatedRoute, useValue:{snapshot:{paramMap:convertToParamMap({text:'1'})}}}
      ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeriesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getResultSeries and load data on init', () => {
    expect(component.text).toBe("1");
    expect(getResultSeriesSpy).toHaveBeenCalled();
  });

  it('should onSizeChanged and onPageChanged call getResultSeries', () => {
    spyOn(component, "getResultSeries");
    component.onSizeChanged();
    let a = { size: null, itemsPerPage: null };
    component.onPageChanged(a);
    expect(component.getResultSeries).toHaveBeenCalledTimes(2);
  });

  it('should Vissza button call location.back', () => {
    let button = fixture.nativeElement.querySelector("button");
    expect(button.textContent).toBe("Vissza");
    button.click();
    expect(backSpy).toHaveBeenCalled();
  });
});
