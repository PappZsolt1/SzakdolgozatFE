import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ArticleComponent } from './article.component';
import { FormsModule } from '@angular/forms';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Location } from '@angular/common';
import { ArticleService } from '../shared/article.service';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { of } from 'rxjs';

class location {}

describe('ArticleComponent', () => {
  let component: ArticleComponent;
  let fixture: ComponentFixture<ArticleComponent>;

  let articleService = jasmine.createSpyObj("ArticleService", ["getArticle"]);
  let getArticleSpy;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule ],
      declarations: [ ArticleComponent ],
      providers: [
        { provide: Location, useValue: location },
        { provide: ArticleService, useValue: articleService },
        { provide: ActivatedRoute, useValue:{snapshot:{paramMap:convertToParamMap({id:'1'})}}}
      ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleComponent);
    component = fixture.componentInstance;
    
    getArticleSpy = articleService.getArticle.and.returnValue(of());
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getArticle on init', () => {
    expect(getArticleSpy.calls.any()).toBe(true);
  });
});
