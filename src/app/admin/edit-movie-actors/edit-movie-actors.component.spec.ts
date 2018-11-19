import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMovieActorsComponent } from './edit-movie-actors.component';

describe('EditMovieActorsComponent', () => {
  let component: EditMovieActorsComponent;
  let fixture: ComponentFixture<EditMovieActorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditMovieActorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditMovieActorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
