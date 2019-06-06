import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { EditGenreComponent } from './edit-genre.component';
import { FormsModule } from '@angular/forms';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { GenreService } from '../../shared/services/genre.service';
import { Location } from '@angular/common';
import { of } from 'rxjs';
import { Genre } from '../../shared/models/genre.model';

describe('EditGenreComponent', () => {
  let component: EditGenreComponent;
  let fixture: ComponentFixture<EditGenreComponent>;

  let modalService = jasmine.createSpyObj("BsModalService", ["show"]);
  let showSpy = modalService.show;

  let location = jasmine.createSpyObj("Location", ["back"]);
  let backSpy = location.back;

  let genreService = jasmine.createSpyObj("GenreService",
  ["getAllGenres", "addGenre", "modifyGenre", "canBeDeleted", "deleteGenre"]);
  let getAllGenresSpy = genreService.getAllGenres.and.returnValue(of());
  let addGenreSpy = genreService.addGenre.and.returnValue(of());
  let modifyGenreSpy = genreService.modifyGenre.and.returnValue(of());
  let canBeDeletedSpy = genreService.canBeDeleted.and.returnValue(of());
  let deleteGenreSpy = genreService.deleteGenre.and.returnValue(of());

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule ],
      declarations: [ EditGenreComponent ],
      providers: [
        { provide: Location, useValue: location },
        { provide: GenreService, useValue: genreService },
        { provide: BsModalService, useValue: modalService }
      ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditGenreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getAllGenresSpy on init', () => {
    expect(getAllGenresSpy).toHaveBeenCalled();
  });

  it('should show addGenre form', () => {
    let button = fixture.nativeElement.querySelector("button");
    expect(button.textContent).toBe("Létrehozás");
    button.click();
    expect(component.create).toBe(true);
    fixture.detectChanges();
    let buttons = fixture.nativeElement.querySelectorAll("button");
    expect(buttons[1].textContent).toBe("Hozzáadás");
    buttons[1].click();
    expect(addGenreSpy).toHaveBeenCalled();
    expect(buttons[0].textContent).toBe("Mégse");
    buttons[0].click();
    expect(component.create).toBe(false);
  });

  it('should show modifyGenre form', () => {
    let g: Genre = { id: null, name: "g" };
    component.genres = [];
    component.genres.push(g);
    fixture.detectChanges();
    let buttons = fixture.nativeElement.querySelectorAll("button");
    expect(buttons[1].textContent).toBe("Törlés");
    expect(buttons[0].textContent).toBe("Szerkesztés");
    buttons[0].click();
    expect(component.edit).toBe(true);
    fixture.detectChanges();
    buttons = fixture.nativeElement.querySelectorAll("button");
    expect(buttons[4].textContent).toBe("Mentés");
    expect(buttons[3].textContent).toBe("Mégse");
    buttons[4].click();
    expect(modifyGenreSpy).toHaveBeenCalled();
    buttons[3].click();
    expect(component.edit).toBe(false);
  });

  it('should deleteGenre call canBeDeleted', () => {
    component.deleteGenre(null, null);
    expect(canBeDeletedSpy).toHaveBeenCalled();
  });

  it('should Vissza button call location.back', () => {
    let buttons = fixture.nativeElement.querySelectorAll("button");
    expect(buttons[buttons.length - 1].textContent).toBe("Vissza");
    buttons[buttons.length - 1].click();
    expect(backSpy).toHaveBeenCalled();
  });
});
