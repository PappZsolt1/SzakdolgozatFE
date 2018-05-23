import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TopicListComponent } from './topic-list/topic-list.component';
import { TopicComponent } from './topic/topic.component';
import { NewTopicComponent } from './new-topic/new-topic.component';
import { ForumRoutingModule } from './forum-routing.module';
import { CommentListComponent } from './comment-list/comment-list.component';
import { NewCommentComponent } from './new-comment/new-comment.component';
import { ForumShellComponent } from './forum-shell/forum-shell.component';

@NgModule({
  imports: [
    CommonModule,
    ForumRoutingModule
  ],
  declarations: [
    TopicListComponent,
    TopicComponent,
    NewTopicComponent,
    CommentListComponent,
    NewCommentComponent,
    ForumShellComponent
  ]
})
export class ForumModule { }
