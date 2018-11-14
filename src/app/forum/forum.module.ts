import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TopicListComponent } from './topic-list/topic-list.component';
import { TopicComponent } from './topic/topic.component';
import { NewTopicComponent } from './new-topic/new-topic.component';
import { ForumRoutingModule } from './forum-routing.module';
import { ForumShellComponent } from './forum-shell/forum-shell.component';
import { TopicService } from './shared/topic.service';
import { CommentService } from '../shared/services/comment.service';
import { RulesService } from '../shared/services/rules.service';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ForumRoutingModule
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
