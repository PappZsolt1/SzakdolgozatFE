import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CommentListComponent } from './comment-list/comment-list.component';
import { NewCommentComponent } from './new-comment/new-comment.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    CommentListComponent,
    NewCommentComponent
  ],
  exports: [
    CommonModule,
    FormsModule,
    CommentListComponent,
    NewCommentComponent
  ]
})
export class SharedCommentModule { }
