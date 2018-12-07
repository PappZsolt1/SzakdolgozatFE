import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticlesShellComponent } from './articles-shell.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('ArticlesShellComponent', () => {
  let component: ArticlesShellComponent;
  let fixture: ComponentFixture<ArticlesShellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticlesShellComponent ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticlesShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
