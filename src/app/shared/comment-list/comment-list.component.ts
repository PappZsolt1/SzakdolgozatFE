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

  constructor(private commentService: CommentService) { }

  ngOnInit() {
    this.loadComments();
  }

  onRefresh(): void {
    this.loadComments();
  }

  loadComments(): void {
    switch (this.type) {
      case "article":
        this.commentService.getArticleComments(this.id).subscribe(r => this.comments = r);
      break;
      case "actor":
        this.commentService.getActorComments(this.id).subscribe(r => this.comments = r);
        break;
      case "movie":
        this.commentService.getMovieComments(this.id).subscribe(r => this.comments = r);
        break;
      case "episode":
        this.commentService.getEpisodeComments(this.id).subscribe(r => this.comments = r);
        break;
      case "topic":
        this.commentService.getTopicComments(this.id).subscribe(r => this.comments = r);
        break;
      default:
        break;
    }
  }
}
