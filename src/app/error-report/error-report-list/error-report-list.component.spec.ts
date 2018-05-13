import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorReportListComponent } from './error-report-list.component';

describe('ErrorReportListComponent', () => {
  let component: ErrorReportListComponent;
  let fixture: ComponentFixture<ErrorReportListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErrorReportListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorReportListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
