import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { EditGenderComponent } from './edit-gender.component';
import { FormsModule } from '@angular/forms';
import { BsModalService } from 'ngx-bootstrap/modal';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { GenderService } from '../../shared/services/gender.service';
import { of } from 'rxjs';
import { Location } from '@angular/common';
import { Gender } from '../../shared/models/gender.model';

describe('EditGenderComponent', () => {
  let component: EditGenderComponent;
  let fixture: ComponentFixture<EditGenderComponent>;

  let modalService = jasmine.createSpyObj("BsModalService", ["show"]);
  let showSpy = modalService.show;

  let location = jasmine.createSpyObj("Location", ["back"]);
  let backSpy = location.back;

  let genderService = jasmine.createSpyObj("GenderService",
  ["getAllGenders", "addGender", "modifyGender", "canBeDeleted", "deleteGender"]);
  let getAllGendersSpy = genderService.getAllGenders.and.returnValue(of());
  let addGenderSpy = genderService.addGender.and.returnValue(of());
  let modifyGenderSpy = genderService.modifyGender.and.returnValue(of());
  let canBeDeletedSpy = genderService.canBeDeleted.and.returnValue(of());
  let deleteGenderSpy = genderService.deleteGender.and.returnValue(of());

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule ],
      declarations: [ EditGenderComponent ],
      providers: [
        { provide: Location, useValue: location },
        { provide: GenderService, useValue: genderService },
        { provide: BsModalService, useValue: modalService }
      ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditGenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getAllGendersSpy on init', () => {
    expect(getAllGendersSpy).toHaveBeenCalled();
  });

  it('should show addGender form', () => {
    let button = fixture.nativeElement.querySelector("button");
    expect(button.textContent).toBe("Létrehozás");
    button.click();
    expect(component.create).toBe(true);
    fixture.detectChanges();
    let buttons = fixture.nativeElement.querySelectorAll("button");
    expect(buttons[1].textContent).toBe("Hozzáadás");
    buttons[1].click();
    expect(addGenderSpy).toHaveBeenCalled();
    expect(buttons[0].textContent).toBe("Mégse");
    buttons[0].click();
    expect(component.create).toBe(false);
  });

  it('should show modifyGender form', () => {
    let g: Gender = { id: null, name: "g" };
    component.genders = [];
    component.genders.push(g);
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
    expect(modifyGenderSpy).toHaveBeenCalled();
    buttons[3].click();
    expect(component.edit).toBe(false);
  });

  it('should deleteGender call canBeDeleted', () => {
    component.deleteGender(null, null);
    expect(canBeDeletedSpy).toHaveBeenCalled();
  });

  it('should Vissza button call location.back', () => {
    let buttons = fixture.nativeElement.querySelectorAll("button");
    expect(buttons[buttons.length - 1].textContent).toBe("Vissza");
    buttons[buttons.length - 1].click();
    expect(backSpy).toHaveBeenCalled();
  });
});
