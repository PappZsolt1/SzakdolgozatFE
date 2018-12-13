import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { EditSeasonComponent } from './edit-season.component';
import { FormsModule } from '@angular/forms';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { BsModalService } from 'ngx-bootstrap/modal';
import { SeasonService } from '../../shared/services/season.service';
import { SeriesService } from '../../shared/services/series.service';
import { Location } from '@angular/common';
import { of } from 'rxjs';

describe('EditSeasonComponent', () => {
  let component: EditSeasonComponent;
  let fixture: ComponentFixture<EditSeasonComponent>;

  let modalService = jasmine.createSpyObj("BsModalService", ["show"]);
  let showSpy = modalService.show;

  let location = jasmine.createSpyObj("Location", ["back"]);
  let backSpy = location.back;

  let seriesService = jasmine.createSpyObj("SeriesService", ["checkIfExists"]);
  let checkIfExistsSpy = seriesService.checkIfExists.and.returnValue(of(true));

  let seasonService = jasmine.createSpyObj("SeasonService",
  ["getSeason", "addSeason", "modifySeason", "canBeDeleted", "deleteSeason"]);
  let getSeasonSpy = seasonService.getSeason.and.returnValue(of());
  let addSeasonSpy = seasonService.addSeason.and.returnValue(of());
  let modifySeasonSpy = seasonService.modifySeason.and.returnValue(of());
  let canBeDeletedSpy = seasonService.canBeDeleted.and.returnValue(of());
  let deleteSeasonSpy = seasonService.deleteSeason.and.returnValue(of());

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule ],
      declarations: [ EditSeasonComponent ],
      providers: [
        { provide: Location, useValue: location },
        { provide: SeriesService, useValue: seriesService },
        { provide: SeasonService, useValue: seasonService },
        { provide: BsModalService, useValue: modalService },
        { provide: ActivatedRoute, useValue:{snapshot:{paramMap:convertToParamMap({id:'1'})}}}
      ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSeasonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getSeason if there is id on init', () => {
    expect(getSeasonSpy).toHaveBeenCalled();
  });

  it('should show correct h2 and buttons if modify is true, buttons call methods', () => {
    component.modify = true;
    fixture.detectChanges();
    let h2 = fixture.nativeElement.querySelector("h2");
    expect(h2.textContent).toBe("Évad módosítása");
    let buttons = fixture.nativeElement.querySelectorAll("button");
    expect(buttons[0].textContent).toBe("Módosítás");
    buttons[0].click();
    expect(checkIfExistsSpy).toHaveBeenCalled();
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
    expect(h2.textContent).toBe("Évad létrehozása");
    let buttons = fixture.nativeElement.querySelectorAll("button");
    expect(buttons[0].textContent).toBe("Mentés");
    buttons[0].click();
    expect(checkIfExistsSpy).toHaveBeenCalled();
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
