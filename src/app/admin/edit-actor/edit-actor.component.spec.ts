import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { EditActorComponent } from './edit-actor.component';
import { FormsModule } from '@angular/forms';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { BsModalService } from 'ngx-bootstrap/modal/';
import { ActorService } from '../../shared/services/actor.service';
import { GenderService } from '../../shared/services/gender.service';
import { Location } from '@angular/common';
import { of } from 'rxjs';

describe('EditActorComponent', () => {
  let component: EditActorComponent;
  let fixture: ComponentFixture<EditActorComponent>;

  let modalService = jasmine.createSpyObj("BsModalService", ["show"]);
  let showSpy = modalService.show;

  let location = jasmine.createSpyObj("Location", ["back"]);
  let backSpy = location.back;

  let actorService = jasmine.createSpyObj("ActorService",
  ["getActor", "addActor", "modifyActor", "canBeDeleted", "deleteActor"]);
  let getActorSpy = actorService.getActor.and.returnValue(of());
  let addActorSpy = actorService.addActor.and.returnValue(of());
  let modifyActorSpy = actorService.modifyActor.and.returnValue(of());
  let canBeDeletedSpy = actorService.canBeDeleted.and.returnValue(of());
  let deleteActorSpy = actorService.deleteActor.and.returnValue(of());

  let genderService = jasmine.createSpyObj("GenderService", ["getAllGenders"]);
  let getAllGendersSpy = genderService.getAllGenders.and.returnValue(of());

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule ],
      declarations: [ EditActorComponent ],
      providers: [
        { provide: Location, useValue: location },
        { provide: ActorService, useValue: actorService },
        { provide: GenderService, useValue: genderService },
        { provide: BsModalService, useValue: modalService },
        { provide: ActivatedRoute, useValue:{snapshot:{paramMap:convertToParamMap({id:'1'})}}}
      ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditActorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getActor if there is id on init', () => {
    expect(getActorSpy).toHaveBeenCalled();
  });

  it('should show correct h2 and buttons if modify is true, buttons call methods', () => {
    component.modify = true;
    fixture.detectChanges();
    let h2 = fixture.nativeElement.querySelector("h2");
    expect(h2.textContent).toBe("Színész módosítása");
    let buttons = fixture.nativeElement.querySelectorAll("button");
    expect(buttons[0].textContent).toBe("Módosítás");
    component.bDate = "a";
    buttons[0].click();
    expect(modifyActorSpy).toHaveBeenCalled();
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
    expect(h2.textContent).toBe("Színész létrehozása");
    let buttons = fixture.nativeElement.querySelectorAll("button");
    expect(buttons[0].textContent).toBe("Mentés");
    component.bDate = "a";
    buttons[0].click();
    expect(addActorSpy).toHaveBeenCalled();
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
