import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaginationModule } from 'ngx-bootstrap/pagination';
import { AlertModule } from 'ngx-bootstrap/alert';
import { ModalModule } from 'ngx-bootstrap/modal';
import { TooltipModule } from 'ngx-bootstrap/tooltip';

import { TopicListComponent } from './topic-list/topic-list.component';
import { TopicComponent } from './topic/topic.component';
import { NewTopicComponent } from './new-topic/new-topic.component';
import { ForumRoutingModule } from './forum-routing.module';
import { ForumShellComponent } from './forum-shell/forum-shell.component';
import { TopicService } from './shared/topic.service';
import { CommentService } from '../shared/services/comment.service';
import { RulesService } from '../shared/services/rules.service';
import { SharedCommentModule } from '../shared/shared-comment.module';
import { SharedDirectiveModule } from '../shared/shared-directive.module';

@NgModule({
  imports: [
    CommonModule,
    SharedCommentModule,
    ForumRoutingModule,
    SharedDirectiveModule,
    PaginationModule.forRoot(),
    AlertModule.forRoot(),
    ModalModule.forRoot(),
    TooltipModule.forRoot()
  ],
  declarations: [
    TopicListComponent,
    TopicComponent,
    NewTopicComponent,
    ForumShellComponent
  ],
  providers: [
    TopicService,
    CommentService,
    RulesService
  ]
})
export class ForumModule { }
