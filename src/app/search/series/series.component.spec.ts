import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SeriesComponent } from './series.component';
import { FormsModule } from '@angular/forms';
import { KeycloakService } from 'keycloak-angular';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { SeriesService } from '../../shared/services/series.service';
import { Location } from '@angular/common';
import { of } from 'rxjs';
import { Season } from '../../shared/models/season.model';

describe('SeriesComponent', () => {
  let component: SeriesComponent;
  let fixture: ComponentFixture<SeriesComponent>;

  let keycloakService = jasmine.createSpyObj("KeycloakService", ["isUserInRole"]);
  let isUserInRoleSpy = keycloakService.isUserInRole.and.returnValue(true);
  
  let location = jasmine.createSpyObj("Location", ["back"]);
  let backSpy = location.back;

  let seriesService = jasmine.createSpyObj("SeriesService", ["getSeries"]);
  let getSeriesSpy = seriesService.getSeries.and.returnValue(of());

  let season: Season = { id: null, number: 8, episodes: null }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule ],
      declarations: [ SeriesComponent ],
      providers: [
        { provide: Location, useValue: location },
        { provide: KeycloakService, useValue: keycloakService },
        { provide: SeriesService, useValue: seriesService },
        { provide: ActivatedRoute, useValue:{snapshot:{paramMap:convertToParamMap({id:'1'})}}}
      ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getSeries on init', () => {
    expect(getSeriesSpy).toHaveBeenCalled();
  });

  it('should Vissza button call location.back', () => {
    let button = fixture.nativeElement.querySelector("button");
    expect(button.textContent).toBe("Vissza");
    button.click();
    expect(backSpy).toHaveBeenCalled();
  });

  it('should show season', () => {
    component.showEpisodes(season);
    expect(component.show).toBe(true);
    expect(component.season.number).toBe(8);
  });
});
