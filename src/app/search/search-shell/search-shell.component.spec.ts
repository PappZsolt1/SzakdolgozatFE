import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchShellComponent } from './search-shell.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('SearchShellComponent', () => {
  let component: SearchShellComponent;
  let fixture: ComponentFixture<SearchShellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchShellComponent ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
