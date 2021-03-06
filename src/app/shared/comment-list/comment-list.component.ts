import { Component, OnInit, Input, TemplateRef } from '@angular/core';

import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

import { CommentService } from '../services/comment.service';
import { Comment } from '../models/comment.model';
import { calculatePageFirst } from '../calculate-page-first';
import { calculatePageLast } from '../calculate-page-last';
import { calculatePage } from '../calculate-page';

import { KeycloakService } from 'keycloak-angular';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.css']
})
export class CommentListComponent implements OnInit {

  @Input() type: string;
  @Input() id: number;

  comments: Comment[];
  total: number;
  page = 1;
  size = 10;
  sizes = [10, 20, 30];
  pageFirst = 0;
  pageLast = 0;
  modalRef: BsModalRef;
  selectedId: number;

  canDo = this.keycloak.isUserInRole("Moderator");

  constructor(
    private keycloak: KeycloakService,
    private modalService: BsModalService,
    private commentService: CommentService
    ) { }

  ngOnInit() {
    this.loadComments();
  }

  onRefresh(): void {
    this.loadComments();
  }

  onSizeChanged(): void {
    this.page = calculatePage(this.page, this.size, this.total);
    this.loadComments();
  }

  onPageChanged(event: any): void {
    this.page = event.page;
    this.size = event.itemsPerPage;
    this.loadComments();
  }

  loadComments(): void {
    switch (this.type) {
      case "article":
        this.commentService.getArticleComments(this.page, this.size, this.id).subscribe(r => {
          this.comments = r.results; this.total = r.total;
          this.pageFirst = calculatePageFirst(this.page, this.size, this.total);
          this.pageLast = calculatePageLast(this.page, this.size, this.total);
        });
      break;
      case "actor":
        this.commentService.getActorComments(this.page, this.size, this.id).subscribe(r => {
          this.comments = r.results; this.total = r.total;
          this.pageFirst = calculatePageFirst(this.page, this.size, this.total);
          this.pageLast = calculatePageLast(this.page, this.size, this.total);
        });
        break;
      case "movie":
        this.commentService.getMovieComments(this.page, this.size, this.id).subscribe(r => {
          this.comments = r.results; this.total = r.total;
          this.pageFirst = calculatePageFirst(this.page, this.size, this.total);
          this.pageLast = calculatePageLast(this.page, this.size, this.total);
        });
        break;
      case "episode":
        this.commentService.getEpisodeComments(this.page, this.size, this.id).subscribe(r => {
          this.comments = r.results; this.total = r.total;
          this.pageFirst = calculatePageFirst(this.page, this.size, this.total);
          this.pageLast = calculatePageLast(this.page, this.size, this.total);
        });
        break;
      case "topic":
        this.commentService.getTopicComments(this.page, this.size, this.id).subscribe(r => {
          this.comments = r.results; this.total = r.total;
          this.pageFirst = calculatePageFirst(this.page, this.size, this.total);
          this.pageLast = calculatePageLast(this.page, this.size, this.total);
        });
        break;
      default:
        break;
    }
  }

  moderateComment(id: number, template: TemplateRef<any>): void {
    this.selectedId = id;
    this.modalRef = this.modalService.show(template, {class: 'modal-sm'});
  }

  confirm(): void {
    this.commentService.moderateComment(this.selectedId).subscribe(() => this.loadComments());
    this.modalRef.hide();
  }
 
  decline(): void {
    this.modalRef.hide();
  }
}
