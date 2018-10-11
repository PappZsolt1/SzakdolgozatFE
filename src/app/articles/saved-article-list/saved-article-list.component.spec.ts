import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedArticleListComponent } from './saved-article-list.component';

describe('SavedArticleListComponent', () => {
  let component: SavedArticleListComponent;
  let fixture: ComponentFixture<SavedArticleListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SavedArticleListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SavedArticleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
