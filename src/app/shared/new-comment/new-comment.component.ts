import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { CommentService } from '../services/comment.service';
import { Comment } from '../models/comment.model';
import * as globals from '../../shared/globals';

@Component({
  selector: 'app-new-comment',
  templateUrl: './new-comment.component.html',
  styleUrls: ['./new-comment.component.css']
})
export class NewCommentComponent implements OnInit {

  @Input() type: string;
  @Input() id: number;
  @Output() refresh = new EventEmitter();

  comment: Comment = { id: null, content: null, postDate: null, username: null, topic: null, actor: null, article: null, episode: null, movie: null, moderated: null };
  show = false;

  textareaMessage = globals.textareaMessage;

  constructor(private commentService: CommentService) { }

  ngOnInit() {
  }

  addComment(): void {
    switch (this.type) {
      case "article":
        this.commentService.addArticleComment(this.id, this.comment).subscribe(() => {
          this.show = false; this.refresh.emit(); });
        break;
      case "actor":
        this.commentService.addActorComment(this.id, this.comment).subscribe(() => {
          this.show = false; this.refresh.emit(); });
        break;
      case "movie":
        this.commentService.addMovieComment(this.id, this.comment).subscribe(() => {
          this.show = false; this.refresh.emit(); });
        break;
      case "episode":
        this.commentService.addEpisodeComment(this.id, this.comment).subscribe(() => {
          this.show = false; this.refresh.emit(); });
        break;
      case "topic":
        this.commentService.addTopicComment(this.id, this.comment).subscribe(() => {
          this.show = false; this.refresh.emit(); });
        break;
      default:
        break;
    }
  }

  writeNewComment(): void {
    this.comment.content = null;
    this.show = true;
  }

  cancel(): void {
    this.show = false;
  }
}
