import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { EditMovieComponent } from './edit-movie.component';
import { FormsModule } from '@angular/forms';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { BsModalService } from 'ngx-bootstrap/modal';
import { Location } from '@angular/common';
import { MovieService } from '../../shared/services/movie.service';
import { of } from 'rxjs';
import { GenreService } from '../../shared/services/genre.service';
import { AgeClassificationService } from '../../shared/services/age-classification.service';

describe('EditMovieComponent', () => {
  let component: EditMovieComponent;
  let fixture: ComponentFixture<EditMovieComponent>;

  let modalService = jasmine.createSpyObj("BsModalService", ["show"]);
  let showSpy = modalService.show;

  let location = jasmine.createSpyObj("Location", ["back"]);
  let backSpy = location.back;

  let movieService = jasmine.createSpyObj("MovieService",
  ["getMovie", "addMovie", "modifyMovie", "canBeDeleted", "deleteMovie"]);
  let getMovieSpy = movieService.getMovie.and.returnValue(of());
  let addMovieSpy = movieService.addMovie.and.returnValue(of());
  let modifyMovieSpy = movieService.modifyMovie.and.returnValue(of());
  let canBeDeletedSpy = movieService.canBeDeleted.and.returnValue(of());
  let deleteMovieSpy = movieService.deleteMovie.and.returnValue(of());

  let genreService = jasmine.createSpyObj("GenreService", ["getAllGenres"]);
  let getAllGenresSpy = genreService.getAllGenres.and.returnValue(of());

 let ageClassificationService = jasmine.createSpyObj("AgeClassificationService", ["getAllAgeClassifications"]);
 let getAllAgeClassificationsSpy = ageClassificationService.getAllAgeClassifications.and.returnValue(of());

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule ],
      declarations: [ EditMovieComponent ],
      providers: [
        { provide: Location, useValue: location },
        { provide: MovieService, useValue: movieService },
        { provide: GenreService, useValue: genreService },
        { provide: BsModalService, useValue: modalService },
        { provide: AgeClassificationService, useValue: ageClassificationService },
        { provide: ActivatedRoute, useValue:{snapshot:{paramMap:convertToParamMap({id:'1'})}}}
      ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getMovie if there is id on init', () => {
    expect(getMovieSpy).toHaveBeenCalled();
  });

  it('should show correct h2 and buttons if modify is true, buttons call methods', () => {
    component.modify = true;
    fixture.detectChanges();
    let h2 = fixture.nativeElement.querySelector("h2");
    expect(h2.textContent).toBe("Film módosítása");
    let buttons = fixture.nativeElement.querySelectorAll("button");
    expect(buttons[0].textContent).toBe("Módosítás");
    component.hours = 1;
    component.minutes = 1;
    buttons[0].click();
    expect(modifyMovieSpy).toHaveBeenCalled();
    expect(buttons[1].textContent).toBe("Törlés");
    buttons[1].click();
    expect(canBeDeletedSpy).toHaveBeenCalled();
    expect(buttons[2].textContent).toBe("Vissza");
    buttons[2].click();
    expect(backSpy).toHaveBeenCalled();
  });

  it('should show correct h2 and buttons if modify is false, buttons call methods', () => {
    component.modify = false;
    fixture.detectChanges();
    let h2 = fixture.nativeElement.querySelector("h2");
    expect(h2.textContent).toBe("Film létrehozása");
    let buttons = fixture.nativeElement.querySelectorAll("button");
    expect(buttons[0].textContent).toBe("Mentés");
    component.hours = 1;
    component.minutes = 1;
    buttons[0].click();
    expect(addMovieSpy).toHaveBeenCalled();
    expect(buttons[1].textContent).toBe("Vissza");
    buttons[1].click();
    expect(backSpy).toHaveBeenCalled();
  });

  it('should delete hide form', () => {
    component.deleted = true;
    fixture.detectChanges();
    let button = fixture.nativeElement.querySelector("button");
    expect(button.textContent).toBe("Vissza");
  });

  it('should save hide form', () => {
    component.saved = true;
    fixture.detectChanges();
    let button = fixture.nativeElement.querySelector("button");
    expect(button.textContent).toBe("Vissza");
  });
});
