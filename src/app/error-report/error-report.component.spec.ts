import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorReportComponent } from './error-report.component';

describe('ErrorReportComponent', () => {
  let component: ErrorReportComponent;
  let fixture: ComponentFixture<ErrorReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErrorReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
