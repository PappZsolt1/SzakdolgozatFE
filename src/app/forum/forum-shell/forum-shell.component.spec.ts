import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForumShellComponent } from './forum-shell.component';

describe('ForumShellComponent', () => {
  let component: ForumShellComponent;
  let fixture: ComponentFixture<ForumShellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForumShellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForumShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
