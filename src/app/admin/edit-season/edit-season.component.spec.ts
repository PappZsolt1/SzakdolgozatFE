import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSeasonComponent } from './edit-season.component';

describe('EditSeasonComponent', () => {
  let component: EditSeasonComponent;
  let fixture: ComponentFixture<EditSeasonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditSeasonComponent ]
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
});
