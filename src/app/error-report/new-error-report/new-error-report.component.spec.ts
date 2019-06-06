import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NewErrorReportComponent } from './new-error-report.component';
import { ErrorReportService } from '../shared/error-report.service';
import { FormsModule } from '@angular/forms';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('NewErrorReportComponent', () => {
  let component: NewErrorReportComponent;
  let fixture: ComponentFixture<NewErrorReportComponent>;

  const errorReportService = jasmine.createSpyObj("ErrorReportService", ["addErrorReport"]);
  let addErrorReportSpy = errorReportService.addErrorReport.and.returnValue();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule ],
      declarations: [ NewErrorReportComponent ],
      providers: [{ provide: ErrorReportService, useValue: errorReportService }],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewErrorReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should submit call addErrorReport', () => {
    let submit = fixture.nativeElement.querySelector("button");
    submit.click();
    expect(addErrorReportSpy.calls.any()).toBe(true);
  });

  it('should button when sent is true make sent false', () => {
    component.sent = true;
    fixture.detectChanges();
    let button = fixture.nativeElement.querySelector("button");
    expect(button.textContent).toBe("Új hibabejelentés írása");
    button.click();
    expect(component.sent).toBe(false);
  });
});
