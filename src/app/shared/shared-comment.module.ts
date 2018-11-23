import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PaginationModule } from 'ngx-bootstrap/pagination';

import { CommentListComponent } from './comment-list/comment-list.component';
import { NewCommentComponent } from './new-comment/new-comment.component';
import { SharedDirectiveModule } from '../shared/shared-directive.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedDirectiveModule,
    PaginationModule.forRoot()
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
