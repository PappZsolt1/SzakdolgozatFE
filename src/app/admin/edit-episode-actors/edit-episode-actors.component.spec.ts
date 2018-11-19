import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEpisodeActorsComponent } from './edit-episode-actors.component';

describe('EditEpisodeActorsComponent', () => {
  let component: EditEpisodeActorsComponent;
  let fixture: ComponentFixture<EditEpisodeActorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditEpisodeActorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditEpisodeActorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
