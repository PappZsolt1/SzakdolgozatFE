import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NewCommentComponent } from './new-comment.component';
import { KeycloakService } from 'keycloak-angular';
import { CommentService } from "../services/comment.service";
import { FormsModule } from '@angular/forms';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { of } from 'rxjs';

describe('NewCommentComponent', () => {
  let component: NewCommentComponent;
  let fixture: ComponentFixture<NewCommentComponent>;

  const keycloakService = jasmine.createSpyObj("KeycloakService",
  ["isUserInRole", "getUsername"]);

  let isUserInRoleSpy = keycloakService.isUserInRole.and.returnValue(true);
  let getUsernameSpy = keycloakService.getUsername.and.returnValue("Jani");

  const commentService = jasmine.createSpyObj("CommentService",
  ["addArticleComment", "addActorComment", "addMovieComment", "addEpisodeComment", "addTopicComment"]);

  let addArticleCommentSpy = commentService.addArticleComment.and.returnValue(of());
  let addActorCommentSpy = commentService.addActorComment.and.returnValue(of());
  let addMovieCommentSpy = commentService.addMovieComment.and.returnValue(of());
  let addEpisodeCommentSpy = commentService.addEpisodeComment.and.returnValue(of());
  let addTopicCommentSpy = commentService.addTopicComment.and.returnValue(of());

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule ],
      declarations: [ NewCommentComponent ],
      providers: [
        { provide: KeycloakService, useValue: keycloakService },
        { provide: CommentService, useValue: commentService }
      ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should detect addArticleComment call', () => {
    component.type = "article";
    component.addComment();
    expect(addArticleCommentSpy.calls.any()).toBe(true);
  });

  it('should detect addActorComment call', () => {
    component.type = "actor";
    component.addComment();
    expect(addActorCommentSpy.calls.any()).toBe(true);
  });

  it('should detect addMovieComment call', () => {
    component.type = "movie";
    component.addComment();
    expect(addMovieCommentSpy.calls.any()).toBe(true);
  });

  it('should detect addEpisodeComment call', () => {
    component.type = "episode";
    component.addComment();
    expect(addEpisodeCommentSpy.calls.any()).toBe(true);
  });

  it('should detect addTopicComment call', () => {
    component.type = "topic";
    component.addComment();
    expect(addTopicCommentSpy.calls.any()).toBe(true);
  });

  it('should button click make show true', () => {
    component.show = false;
    let compEl = fixture.nativeElement.querySelector("button");
    expect(compEl.textContent).toBe("Új hozzászólás írása");
    compEl.dispatchEvent(new Event("click"));
    fixture.detectChanges();
    expect(component.show).toBe(true);
  });
});
