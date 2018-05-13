import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorReportShellComponent } from './error-report-shell.component';

describe('ErrorReportComponent', () => {
  let component: ErrorReportShellComponent;
  let fixture: ComponentFixture<ErrorReportShellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErrorReportShellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorReportShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
