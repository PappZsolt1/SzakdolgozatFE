import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { CommentListComponent } from './comment-list.component';
import { FormsModule } from '@angular/forms';
import { KeycloakService } from 'keycloak-angular';
import { BsModalService } from 'ngx-bootstrap/modal';
import { CommentService } from '../services/comment.service';
import { of } from 'rxjs';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Wrapper } from '../models/wrapper.model';
import { Comment } from '../models/comment.model';

describe('CommentListComponent', () => {
  let component: CommentListComponent;
  let fixture: ComponentFixture<CommentListComponent>;

  const keycloakService = jasmine.createSpyObj("KeycloakService", ["isUserInRole"]);

  let isUserInRoleSpy = keycloakService.isUserInRole.and.returnValue(true);

  const modalService = jasmine.createSpyObj("BsModalService", ["show"]);

  let showSpy = modalService.show.and.returnValue();

  const commentService = jasmine.createSpyObj("CommentService",
  ["getArticleComments", "getActorComments", "getMovieComments", "getEpisodeComments", "getTopicComments", "moderateComment"]);

  let comment: Comment = { id: null, content: null, postDate: null, username: null, topic: null, actor: null, article: null, episode: null, movie: null, moderated: null };
  comment.content = "tartalom";
  let wrapper: Wrapper = { results: [comment], total: 9 };

  let getArticleCommentsSpy = commentService.getArticleComments.and.returnValue(of());
  let getActorCommentsSpy = commentService.getActorComments.and.returnValue(of());
  let getMovieCommentsSpy = commentService.getMovieComments.and.returnValue(of());
  let getEpisodeCommentsSpy = commentService.getEpisodeComments.and.returnValue(of());
  let getTopicCommentsSpy = commentService.getTopicComments.and.returnValue(of(wrapper));
  let moderateCommentSpy = commentService.moderateComment.and.returnValue(of());

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule ],
      declarations: [ CommentListComponent ],
      providers: [
        { provide: KeycloakService, useValue: keycloakService },
        { provide: BsModalService, useValue: modalService },
        { provide: CommentService, useValue: commentService }
      ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should detect getArticleComments call', () => {
    component.type = "article";
    component.loadComments();
    expect(getArticleCommentsSpy.calls.any()).toBe(true);
  });

  it('should detect getActorComments call', () => {
    component.type = "actor";
    component.loadComments();
    expect(getActorCommentsSpy.calls.any()).toBe(true);
  });

  it('should detect getMovieComments call', () => {
    component.type = "movie";
    component.loadComments();
    expect(getMovieCommentsSpy.calls.any()).toBe(true);
  });

  it('should detect getEpisodeComments call', () => {
    component.type = "episode";
    component.loadComments();
    expect(getEpisodeCommentsSpy.calls.any()).toBe(true);
  });

  it('should detect getTopicComments call', () => {
    component.type = "topic";
    component.loadComments();
    expect(getTopicCommentsSpy.calls.any()).toBe(true);
  });

  it('should getTopicComments load data', fakeAsync(() => {
    component.type = "topic";
    component.loadComments();
    tick();
    fixture.detectChanges();
    expect(component.total).toBe(9);
    expect(component.comments[0].content).toBe("tartalom");
  }));

  it('should button show modal', fakeAsync(() => {
    component.type = "topic";
    component.loadComments();
    tick();
    fixture.detectChanges();
    let compEl = fixture.nativeElement.querySelector("button");
    compEl.click();
    expect(showSpy.calls.any()).toBe(true);
  }));
});
