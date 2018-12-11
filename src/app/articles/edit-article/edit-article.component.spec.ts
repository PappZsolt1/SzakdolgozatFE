import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { EditArticleComponent } from './edit-article.component';
import { FormsModule } from '@angular/forms';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ArticleService } from '../shared/article.service';
import { KeycloakService } from 'keycloak-angular';
import { BsModalService } from 'ngx-bootstrap/modal';
import { convertToParamMap, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { of } from 'rxjs';

class location {}

describe('EditArticleComponent', () => {
  let component: EditArticleComponent;
  let fixture: ComponentFixture<EditArticleComponent>;

  let keycloakService = jasmine.createSpyObj("KeycloakService", ["getUsername"]);
  let getUsernameSpy;

  let articleService = jasmine.createSpyObj("ArticleService",
  ["getArticle", "saveArticle", "publishArticle", "deleteArticle"]);
  let getArticleSpy;
  let saveArticleSpy;
  let publishArticleSpy;
  let deleteArticleSpy;
  
  let modalService = jasmine.createSpyObj("BsModalService", ["show"]);
  let showSpy = modalService.show.and.returnValue();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule ],
      declarations: [ EditArticleComponent ],
      providers: [
        { provide: Location, useValue: location },
        { provide: ArticleService, useValue: articleService },
        { provide: BsModalService, useValue: modalService },
        { provide: KeycloakService, useValue: keycloakService },
        { provide: ActivatedRoute, useValue:{snapshot:{paramMap:convertToParamMap({id:'1'})}}}
      ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditArticleComponent);
    component = fixture.componentInstance;
    
    getUsernameSpy = keycloakService.getUsername.and.returnValue();
    getArticleSpy = articleService.getArticle.and.returnValue(of());
    saveArticleSpy = articleService.saveArticle.and.returnValue();
    publishArticleSpy = articleService.publishArticle.and.returnValue();
    deleteArticleSpy = articleService.deleteArticle.and.returnValue();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getArticle on init', () => {
    expect(getArticleSpy.calls.any()).toBe(true);
  });

  it('should show correct h2 if modify false', () => {
    component.modify = false;
    fixture.detectChanges();
    let h2 = fixture.nativeElement.querySelector("h2");
    expect(h2.textContent).toBe("Új cikk írása");
  });

  it('should show correct h2 and button if modify true', () => {
    component.modify = true;
    fixture.detectChanges();
    let h2 = fixture.nativeElement.querySelector("h2");
    let buttons = fixture.nativeElement.querySelectorAll("button");
    expect(h2.textContent).toBe("Cikk módosítása");
    expect(buttons[2].textContent).toBe("Törlés");
  });

  it('should Mentés button call saveArticle', () => {
    let buttons = fixture.nativeElement.querySelectorAll("button");
    buttons[0].click();
    expect(saveArticleSpy.calls.count()).toBe(1);
  });

  it('should Publikálás button call publishArticle and getUsername', () => {
    let buttons = fixture.nativeElement.querySelectorAll("button");
    buttons[1].click();
    expect(publishArticleSpy.calls.count()).toBe(1);
    expect(getUsernameSpy.calls.count()).toBe(1);
  });

  it('should deleteArticle show modal', () => {
    component.deleteArticle(null);
    expect(showSpy.calls.count()).toBe(1);
  });
});
