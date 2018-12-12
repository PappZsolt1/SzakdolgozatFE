import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { MovieComponent } from './movie.component';
import { FormsModule } from '@angular/forms';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { KeycloakService } from 'keycloak-angular';
import { RatingService } from '../shared/rating.service';
import { MovieService } from '../../shared/services/movie.service';
import { of } from 'rxjs';
import { Location } from '@angular/common';
import { Movie } from '../../shared/models/movie.model';
import { AgeClassification } from '../../shared/models/age-classification.model';
import { Genre } from '../../shared/models/genre.model';

describe('MovieComponent', () => {
  let component: MovieComponent;
  let fixture: ComponentFixture<MovieComponent>;

  let keycloakService = jasmine.createSpyObj("KeycloakService", ["isUserInRole", "getUsername"]);
  let isUserInRoleSpy = keycloakService.isUserInRole.and.returnValue(true);
  let getUsernameSpy = keycloakService.getUsername.and.returnValue("géza");
  
  let location = jasmine.createSpyObj("Location", ["back"]);
  let backSpy = location.back;

  let ratingService = jasmine.createSpyObj("RatingService", ["canRateThisMovie"]);
  let canRateThisMovieSpy = ratingService.canRateThisMovie.and.returnValue(of(true));

  let movieService = jasmine.createSpyObj("MovieService",
  ["getMovie", "getMovieActors", "changeRating"]);
  let getMovieSpy;
  let getMovieActorsSpy;
  let changeRatingSpy;
  
  let a: AgeClassification = { id: null, name: "a" };
  let g: Genre = { id: null, name: "g" };
  let movie: Movie = { id: null, title: null, ageClassification: a, budget: 100, genre: g, imageUrl: null, mLength: null, releaseYear: null, numberOfRatings: null, sumOfRatings: null, rating: null, actors: null, comments: null }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule ],
      declarations: [ MovieComponent ],
      providers: [
        { provide: Location, useValue: location },
        { provide: KeycloakService, useValue: keycloakService },
        { provide: MovieService, useValue: movieService },
        { provide: RatingService, useValue: ratingService },
        { provide: ActivatedRoute, useValue:{snapshot:{paramMap:convertToParamMap({id:'1'})}}}
      ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieComponent);
    component = fixture.componentInstance;

    getMovieSpy = movieService.getMovie.and.returnValue(of(movie));
    getMovieActorsSpy = movieService.getMovieActors.and.returnValue(of());
    changeRatingSpy = movieService.changeRating.and.returnValue(of());
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getMovie and load data on init', fakeAsync(() => {
    expect(getMovieSpy.calls.any()).toBe(true);
    tick();
    expect(component.movie.budget).toBe(100);
    expect(component.movie.ageClassification.name).toBe("a");
    expect(component.movie.genre.name).toBe("g");
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
    expect(buttons[2].textContent).toBe("Film értékelése");
    buttons[2].click();
    expect(canRateThisMovieSpy.calls.any()).toBe(true);
  }));

  it('should cancelRating make showRating false', () => {
    component.showRating = true;
    component.cancelRating();
    expect(component.showRating).toBe(false);
  });

  it('should addRating call changeRating and getUsername', () => {
    component.addRating();
    expect(changeRatingSpy).toHaveBeenCalled();
    expect(getUsernameSpy).toHaveBeenCalled();
  });

  it('should Vissza button call location.back', () => {
    let buttons = fixture.nativeElement.querySelectorAll("button");
    let button = buttons[buttons.length - 1];
    expect(button.textContent).toBe("Vissza");
    button.click();
    expect(backSpy).toHaveBeenCalled();
  });
});
