import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAgeClassificationComponent } from './edit-age-classification.component';

describe('EditAgeClassificationComponent', () => {
  let component: EditAgeClassificationComponent;
  let fixture: ComponentFixture<EditAgeClassificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditAgeClassificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAgeClassificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
