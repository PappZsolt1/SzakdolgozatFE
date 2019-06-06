import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { EditAgeClassificationComponent } from './edit-age-classification.component';
import { FormsModule } from '@angular/forms';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { Location } from '@angular/common';
import { AgeClassificationService } from '../../shared/services/age-classification.service';
import { of } from 'rxjs';
import { AgeClassification } from '../../shared/models/age-classification.model';

describe('EditAgeClassificationComponent', () => {
  let component: EditAgeClassificationComponent;
  let fixture: ComponentFixture<EditAgeClassificationComponent>;

  let modalService = jasmine.createSpyObj("BsModalService", ["show"]);
  let showSpy = modalService.show;

  let location = jasmine.createSpyObj("Location", ["back"]);
  let backSpy = location.back;

  let ageClassificationService = jasmine.createSpyObj("AgeClassificationService",
  ["getAllAgeClassifications", "addAgeClassification", "modifyAgeClassification", "canBeDeleted", "deleteAgeClassification"]);
  let getAllAgeClassificationsSpy = ageClassificationService.getAllAgeClassifications.and.returnValue(of());
  let addAgeClassificationSpy = ageClassificationService.addAgeClassification.and.returnValue(of());
  let modifyAgeClassificationSpy = ageClassificationService.modifyAgeClassification.and.returnValue(of());
  let canBeDeletedSpy = ageClassificationService.canBeDeleted.and.returnValue(of());
  let deleteAgeClassificationSpy = ageClassificationService.deleteAgeClassification.and.returnValue(of());

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule ],
      declarations: [ EditAgeClassificationComponent ],
      providers: [
        { provide: Location, useValue: location },
        { provide: AgeClassificationService, useValue: ageClassificationService },
        { provide: BsModalService, useValue: modalService }
      ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAgeClassificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getAllAgeClassifications on init', () => {
    expect(getAllAgeClassificationsSpy).toHaveBeenCalled();
  });

  it('should show addAgeClassification form', () => {
    let button = fixture.nativeElement.querySelector("button");
    expect(button.textContent).toBe("Létrehozás");
    button.click();
    expect(component.create).toBe(true);
    fixture.detectChanges();
    let buttons = fixture.nativeElement.querySelectorAll("button");
    expect(buttons[1].textContent).toBe("Hozzáadás");
    buttons[1].click();
    expect(addAgeClassificationSpy).toHaveBeenCalled();
    expect(buttons[0].textContent).toBe("Mégse");
    buttons[0].click();
    expect(component.create).toBe(false);
  });

  it('should show modifyAgeClassification form', () => {
    let a: AgeClassification = { id: null, name: "a" };
    component.ageClassifications = [];
    component.ageClassifications.push(a);
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
    expect(modifyAgeClassificationSpy).toHaveBeenCalled();
    buttons[3].click();
    expect(component.edit).toBe(false);
  });

  it('should deleteAgeClassification call canBeDeleted', () => {
    component.deleteAgeClassification(null, null);
    expect(canBeDeletedSpy).toHaveBeenCalled();
  });

  it('should Vissza button call location.back', () => {
    let buttons = fixture.nativeElement.querySelectorAll("button");
    expect(buttons[buttons.length - 1].textContent).toBe("Vissza");
    buttons[buttons.length - 1].click();
    expect(backSpy).toHaveBeenCalled();
  });
});
