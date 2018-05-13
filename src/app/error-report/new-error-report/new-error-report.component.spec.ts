import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewErrorReportComponent } from './new-error-report.component';

describe('NewErrorReportComponent', () => {
  let component: NewErrorReportComponent;
  let fixture: ComponentFixture<NewErrorReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewErrorReportComponent ]
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
});
