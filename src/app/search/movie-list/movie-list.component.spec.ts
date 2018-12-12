import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MovieListComponent } from './movie-list.component';
import { FormsModule } from '@angular/forms';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { MovieService } from '../../shared/services/movie.service';
import { Location } from '@angular/common';
import { of } from 'rxjs';

describe('MovieListComponent', () => {
  let component: MovieListComponent;
  let fixture: ComponentFixture<MovieListComponent>;

  let location = jasmine.createSpyObj("Location", ["back"]);
  let backSpy = location.back;

  let movieService = jasmine.createSpyObj("MovieService", ["getResultMovies"]);
  let getResultMoviespy = movieService.getResultMovies.and.returnValue(of());

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule ],
      declarations: [ MovieListComponent ],
      providers: [
        { provide: Location, useValue: location },
        { provide: MovieService, useValue: movieService },
        { provide: ActivatedRoute, useValue:{snapshot:{paramMap:convertToParamMap({text:'1'})}}}
      ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get param and call getResultMovies on init', () => {
    expect(component.text).toBe("1");
    expect(getResultMoviespy).toHaveBeenCalled();
  });

  it('should Vissza button call location.back', () => {
    let button = fixture.nativeElement.querySelector("button");
    expect(button.textContent).toBe("Vissza");
    button.click();
    expect(backSpy.calls.count()).toBe(1);
  });
});
