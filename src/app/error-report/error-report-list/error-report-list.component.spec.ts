import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { ErrorReportListComponent } from './error-report-list.component';
import { FormsModule } from '@angular/forms';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ErrorReportService } from '../shared/error-report.service';
import { Wrapper } from '../../shared/models/wrapper.model';
import { of } from 'rxjs';

describe('ErrorReportListComponent', () => {
  let component: ErrorReportListComponent;
  let fixture: ComponentFixture<ErrorReportListComponent>;
  
  let wrapper: Wrapper = { results: [], total: 23};
  let errorReportService = jasmine.createSpyObj("ErrorReportService",
  ["getAllErrorReports", "getResolvedErrorReports", "getNotResolvedErrorReports", "makeResolved"]);
  let getAllErrorReportsSpy;
  let getResolvedErrorReportsSpy;
  let getNotResolvedErrorReportsSpy;
  let makeResolvedSpy;
  let buttons;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule ],
      declarations: [ ErrorReportListComponent ],
      providers: [{ provide: ErrorReportService, useValue: errorReportService }],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorReportListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    buttons = fixture.nativeElement.querySelectorAll("button");
    getAllErrorReportsSpy = errorReportService.getAllErrorReports.and.returnValue();
    getResolvedErrorReportsSpy = errorReportService.getResolvedErrorReports.and.returnValue();
    getNotResolvedErrorReportsSpy = errorReportService.getNotResolvedErrorReports.and.returnValue(of(wrapper));
    makeResolvedSpy = errorReportService.makeResolved.and.returnValue(of());
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should first button call getAllErrorReports', () => {
    expect(buttons[0].textContent).toBe("Összes hibabejelentés lekérése");
    buttons[0].click();
    expect(component.listType).toBe("all");
    expect(getAllErrorReportsSpy.calls.count()).toBe(1);
  });

  it('should second button call getResolvedErrorReports', () => {
    expect(buttons[1].textContent).toBe("Megoldott hibabejelentések lekérése");
    buttons[1].click();
    expect(component.listType).toBe("resolved");
    expect(getResolvedErrorReportsSpy.calls.count()).toBe(1);
  });

  it('should third button call getNotResolvedErrorReports', () => {
    expect(buttons[2].textContent).toBe("Megoldatlan hibabejelentések lekérése");
    buttons[2].click();
    expect(component.listType).toBe("notResolved");
    expect(getNotResolvedErrorReportsSpy.calls.count()).toBe(1);
  });

  it('should onSizeChanged load data', fakeAsync(() => {
    component.listType = "notResolved";
    component.onSizeChanged();
    tick();
    expect(component.total).toBe(23);
  }));

  it('should makeResolved call getAllErrorReports', () => {
    component.listType = "all";
    component.makeResolved(null);
    expect(makeResolvedSpy.calls.any()).toBe(true);
    expect(getAllErrorReportsSpy.calls.count()).toBe(1);
  });
});
