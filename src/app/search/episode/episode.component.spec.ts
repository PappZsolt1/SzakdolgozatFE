import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { EpisodeComponent } from './episode.component';
import { FormsModule } from '@angular/forms';
import { KeycloakService } from 'keycloak-angular';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Location } from '@angular/common';
import { EpisodeService } from '../../shared/services/episode.service';
import { RatingService } from '../shared/rating.service';
import { of } from 'rxjs';
import { Episode } from '../../shared/models/episode.model';

describe('EpisodeComponent', () => {
  let component: EpisodeComponent;
  let fixture: ComponentFixture<EpisodeComponent>;

  let keycloakService = jasmine.createSpyObj("KeycloakService", ["isUserInRole", "getUsername"]);
  let isUserInRoleSpy = keycloakService.isUserInRole.and.returnValue(true);
  let getUsernameSpy = keycloakService.getUsername.and.returnValue("sanyi");
  
  let location = jasmine.createSpyObj("Location", ["back"]);
  let backSpy = location.back;

  let ratingService = jasmine.createSpyObj("RatingService", ["canRateThisEpisode"]);
  let canRateThisEpisodeSpy = ratingService.canRateThisEpisode.and.returnValue(of(true));

  let episodeService = jasmine.createSpyObj("EpisodeService",
  ["getEpisode", "getEpisodeActors", "changeRating"]);
  let getEpisodeSpy;
  let getEpisodeActorsSpy;
  let changeRatingSpy;
  
  let episode: Episode = { id: null, eLength: null, title: "cím", rating: null, numberOfRatings: null, releaseDate: null, sumOfRatings: null, actors: null, comments: null }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule ],
      declarations: [ EpisodeComponent ],
      providers: [
        { provide: Location, useValue: location },
        { provide: KeycloakService, useValue: keycloakService },
        { provide: EpisodeService, useValue: episodeService },
        { provide: RatingService, useValue: ratingService },
        { provide: ActivatedRoute, useValue:{snapshot:{paramMap:convertToParamMap({id:'1'})}}}
      ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EpisodeComponent);
    component = fixture.componentInstance;

    getEpisodeSpy = episodeService.getEpisode.and.returnValue(of(episode));
    getEpisodeActorsSpy = episodeService.getEpisodeActors.and.returnValue(of());
    changeRatingSpy = episodeService.changeRating.and.returnValue(of());
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getEpisode and load data on init', fakeAsync(() => {
    expect(getEpisodeSpy.calls.any()).toBe(true);
    tick();
    expect(component.episode.title).toBe("cím");
  }));

  it('should show buttons if admin is logged in', fakeAsync(() => {
    component.canDo1 = true;
    tick();
    let buttons = fixture.nativeElement.querySelectorAll("button");
    expect(buttons[0].textContent).toBe("Szerkesztés");
    expect(buttons[1].textContent).toBe("Színészek kezelése");
  }));

  it('should show rating', fakeAsync(() => {
    component.canDo2 = true;
    tick();
    let buttons = fixture.nativeElement.querySelectorAll("button");
    expect(buttons[2].textContent).toBe("Epizód értékelése");
    buttons[2].click();
    expect(canRateThisEpisodeSpy.calls.any()).toBe(true);
  }));

  it('should cancelRating make showRating false', () => {
    component.showRating = true;
    component.cancelRating();
    expect(component.showRating).toBe(false);
  });

  it('should Vissza button call location.back', () => {
    let buttons = fixture.nativeElement.querySelectorAll("button");
    let button = buttons[buttons.length - 1];
    expect(button.textContent).toBe("Vissza");
    button.click();
    expect(backSpy).toHaveBeenCalled();
  });
});
