import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PaginationModule } from 'ngx-bootstrap/pagination';
import { AlertModule } from 'ngx-bootstrap/alert';
import { ModalModule } from 'ngx-bootstrap/modal';
import { TooltipModule } from 'ngx-bootstrap/tooltip';

import { CommentListComponent } from './comment-list/comment-list.component';
import { NewCommentComponent } from './new-comment/new-comment.component';
import { SharedDirectiveModule } from '../shared/shared-directive.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedDirectiveModule,
    PaginationModule.forRoot(),
    AlertModule.forRoot(),
    ModalModule.forRoot(),
    TooltipModule.forRoot()
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
