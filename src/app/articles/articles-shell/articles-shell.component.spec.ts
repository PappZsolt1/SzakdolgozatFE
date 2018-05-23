import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticlesShellComponent } from './articles-shell.component';

describe('ArticlesShellComponent', () => {
  let component: ArticlesShellComponent;
  let fixture: ComponentFixture<ArticlesShellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticlesShellComponent ]
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
