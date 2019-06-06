import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { ArticleListComponent } from './article-list.component';
import { FormsModule } from '@angular/forms';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { of } from 'rxjs';
import { ArticleService } from '../shared/article.service';
import { KeycloakService } from 'keycloak-angular';
import { Wrapper } from '../../shared/models/wrapper.model';

describe('ArticleListComponent', () => {
  let component: ArticleListComponent;
  let fixture: ComponentFixture<ArticleListComponent>;

  let articleService = jasmine.createSpyObj("ArticleService", ["getPublishedArticles"]);
  let getPublishedArticlesSpy;

  let wrapper: Wrapper = { results: [], total: 12 };

  let keycloakService = jasmine.createSpyObj("KeycloakService", ["isUserInRole"]);
  let isUserInRoleSpy;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule ],
      declarations: [ ArticleListComponent ],
      providers: [
        { provide: ArticleService, useValue: articleService },
        { provide: KeycloakService, useValue: keycloakService }
      ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleListComponent);
    component = fixture.componentInstance;
    
    getPublishedArticlesSpy = articleService.getPublishedArticles.and.returnValue(of(wrapper));
    isUserInRoleSpy = keycloakService.isUserInRole.and.returnValue(true);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getPublishedArticles on init', () => {
    expect(getPublishedArticlesSpy.calls.any()).toBe(true);
  });

  it('should load data on init', fakeAsync(() => {
    tick();
    expect(component.total).toBe(12);
  }));

  it('should onSizeChanged call getPublishedArticles', () => {
    spyOn(component, "getPublishedArticles");
    component.onSizeChanged();
    expect(component.getPublishedArticles).toHaveBeenCalled();
  });
});
