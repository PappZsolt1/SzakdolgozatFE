import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgeClassificationComponent } from './age-classification.component';

describe('AgeClassificationComponent', () => {
  let component: AgeClassificationComponent;
  let fixture: ComponentFixture<AgeClassificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgeClassificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgeClassificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
