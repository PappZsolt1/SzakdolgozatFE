import { Component, OnInit, Input } from '@angular/core';

import { CommentService } from '../services/comment.service';
import { Comment } from '../models/comment.model';

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

  constructor(private commentService: CommentService) { }

  ngOnInit() {
    this.loadComments();
  }

  onRefresh(): void {
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
          this.comments = r.results; this.total = r.total; });
      break;
      case "actor":
        this.commentService.getActorComments(this.page, this.size, this.id).subscribe(r => {
          this.comments = r.results; this.total = r.total; });
        break;
      case "movie":
        this.commentService.getMovieComments(this.page, this.size, this.id).subscribe(r => {
          this.comments = r.results; this.total = r.total; });
        break;
      case "episode":
        this.commentService.getEpisodeComments(this.page, this.size, this.id).subscribe(r => {
          this.comments = r.results; this.total = r.total; });
        break;
      case "topic":
        this.commentService.getTopicComments(this.page, this.size, this.id).subscribe(r => {
          this.comments = r.results; this.total = r.total; });
        break;
      default:
        break;
    }
  }

  moderateComment(id: number): void {
    this.commentService.moderateComment(id).subscribe(() => this.loadComments());
  }
}
