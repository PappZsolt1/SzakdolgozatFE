import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { EditMovieActorsComponent } from './edit-movie-actors.component';
import { FormsModule } from '@angular/forms';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { BsModalService } from 'ngx-bootstrap/modal';
import { ActorService } from '../../shared/services/actor.service';
import { MovieService } from '../../shared/services/movie.service';
import { Location } from '@angular/common';
import { of } from 'rxjs';
import { Actor } from '../../shared/models/actor.model';

describe('EditMovieActorsComponent', () => {
  let component: EditMovieActorsComponent;
  let fixture: ComponentFixture<EditMovieActorsComponent>;

  let modalService = jasmine.createSpyObj("BsModalService", ["show"]);
  let showSpy = modalService.show;

  let location = jasmine.createSpyObj("Location", ["back"]);
  let backSpy = location.back;

  let actorService = jasmine.createSpyObj("ActorService", ["checkIfExists"]);
  let checkIfExistsSpy = actorService.checkIfExists.and.returnValue(of(true));

  let movieService = jasmine.createSpyObj("MovieService", ["checkIfExists", "removeActorFromMovie"]);
  let checkIfExistsMovieSpy = movieService.checkIfExists.and.returnValue(of(true));
  let removeActorFromMovieSpy = movieService.removeActorFromMovie.and.returnValue(of());

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule ],
      declarations: [ EditMovieActorsComponent ],
      providers: [
        { provide: Location, useValue: location },
        { provide: ActorService, useValue: actorService },
        { provide: MovieService, useValue: movieService },
        { provide: BsModalService, useValue: modalService },
        { provide: ActivatedRoute, useValue:{snapshot:{paramMap:convertToParamMap({id:'1'})}}}
      ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditMovieActorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getMovieActors on init if there is id', () => {
    expect(component.movieId).toBe(1);
    expect(checkIfExistsMovieSpy).toHaveBeenCalled();
  });

  it('should button call getMovieActors', () => {
    spyOn(component, "getMovieActors");
    let button = fixture.nativeElement.querySelector("button");
    expect(button.textContent).toBe("Film lekérése");
    button.click();
    expect(component.getMovieActors).toHaveBeenCalled();
  });

  it('should add actor', () => {
    spyOn(component, "addActorToMovie");
    component.showActors = true;
    fixture.detectChanges();
    let buttons = fixture.nativeElement.querySelectorAll("button");
    expect(buttons[1].textContent).toBe("Hozzáadás");
    buttons[1].click();
    expect(component.addActorToMovie).toHaveBeenCalled();
  });
  
  it('should show modal', () => {
    let a: Actor = { id: null, name: null, imageUrl: null, birthDate: null, birthPlace: null, bio: null, gender: null, comments: null, movies: null, episodes: null };
    component.actors = [];
    component.actors.push(a);
    component.showActors = true;
    fixture.detectChanges();
    let buttons = fixture.nativeElement.querySelectorAll("button");
    expect(buttons[1].textContent).toBe("Törlés");
    buttons[1].click();
    expect(showSpy).toHaveBeenCalled();
  });

  it('should Vissza button call location.back', () => {
    let buttons = fixture.nativeElement.querySelectorAll("button");
    expect(buttons[buttons.length - 1].textContent).toBe("Vissza");
    buttons[buttons.length - 1].click();
    expect(backSpy).toHaveBeenCalled();
  });
});
