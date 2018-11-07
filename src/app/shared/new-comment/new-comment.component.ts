import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { CommentService } from '../services/comment.service';
import { Comment } from '../models/comment.model';

@Component({
  selector: 'app-new-comment',
  templateUrl: './new-comment.component.html',
  styleUrls: ['./new-comment.component.css']
})
export class NewCommentComponent implements OnInit {

  comment: Comment = { id: null, content: null, postDate: null, topic: null, actor: null, article: null, episode: null, movie: null };

  constructor(private location: Location, private commentService: CommentService) { }

  ngOnInit() {
  }

  addComment(): void {
    this.commentService.addComment(this.comment).subscribe();
  }

  goBack() {
    this.location.back();
  }
}
