import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SavedArticleListComponent } from './saved-article-list.component';
import { FormsModule } from '@angular/forms';
import { ArticleService } from '../shared/article.service';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Location } from '@angular/common';
import { of } from 'rxjs';

class location {}

describe('SavedArticleListComponent', () => {
  let component: SavedArticleListComponent;
  let fixture: ComponentFixture<SavedArticleListComponent>;

  let articleService = jasmine.createSpyObj("ArticleService", ["getSavedArticles"]);
  let getSavedArticlesSpy;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule ],
      declarations: [ SavedArticleListComponent ],
      providers: [
        { provide: Location, useValue: location },
        { provide: ArticleService, useValue: articleService },
      ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SavedArticleListComponent);
    component = fixture.componentInstance;

    getSavedArticlesSpy = articleService.getSavedArticles.and.returnValue(of());
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getSavedArticles on init', () => {
    expect(getSavedArticlesSpy.calls.any()).toBe(true);
  });
});
