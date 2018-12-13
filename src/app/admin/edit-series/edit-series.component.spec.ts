import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { EditSeriesComponent } from './edit-series.component';
import { FormsModule } from '@angular/forms';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { AgeClassificationService } from '../../shared/services/age-classification.service';
import { BsModalService } from 'ngx-bootstrap/modal';
import { GenreService } from '../../shared/services/genre.service';
import { of } from 'rxjs';
import { SeriesService } from '../../shared/services/series.service';
import { Location } from '@angular/common';

describe('EditSeriesComponent', () => {
  let component: EditSeriesComponent;
  let fixture: ComponentFixture<EditSeriesComponent>;

  let modalService = jasmine.createSpyObj("BsModalService", ["show"]);
  let showSpy = modalService.show;

  let location = jasmine.createSpyObj("Location", ["back"]);
  let backSpy = location.back;

  let seriesService = jasmine.createSpyObj("SeriesService",
  ["getSeries", "addSeries", "modifySeries", "canBeDeleted", "deleteSeries"]);
  let getSeriesSpy = seriesService.getSeries.and.returnValue(of());
  let addSeriesSpy = seriesService.addSeries.and.returnValue(of());
  let modifySeriesSpy = seriesService.modifySeries.and.returnValue(of());
  let canBeDeletedSpy = seriesService.canBeDeleted.and.returnValue(of());
  let deleteSeriesSpy = seriesService.deleteSeries.and.returnValue(of());

  let genreService = jasmine.createSpyObj("GenreService", ["getAllGenres"]);
  let getAllGenresSpy = genreService.getAllGenres.and.returnValue(of());

  let ageClassificationService = jasmine.createSpyObj("AgeClassificationService", ["getAllAgeClassifications"]);
  let getAllAgeClassificationsSpy = ageClassificationService.getAllAgeClassifications.and.returnValue(of());

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule ],
      declarations: [ EditSeriesComponent ],
      providers: [
        { provide: Location, useValue: location },
        { provide: SeriesService, useValue: seriesService },
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
    fixture = TestBed.createComponent(EditSeriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getSeries if there is id on init', () => {
    expect(getSeriesSpy).toHaveBeenCalled();
  });

  it('should show correct h2 and buttons if modify is true, buttons call methods', () => {
    component.modify = true;
    fixture.detectChanges();
    let h2 = fixture.nativeElement.querySelector("h2");
    expect(h2.textContent).toBe("Sorozat módosítása");
    let buttons = fixture.nativeElement.querySelectorAll("button");
    expect(buttons[0].textContent).toBe("Módosítás");
    buttons[0].click();
    expect(modifySeriesSpy).toHaveBeenCalled();
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
    expect(h2.textContent).toBe("Sorozat létrehozása");
    let buttons = fixture.nativeElement.querySelectorAll("button");
    expect(buttons[0].textContent).toBe("Mentés");
    buttons[0].click();
    expect(addSeriesSpy).toHaveBeenCalled();
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
