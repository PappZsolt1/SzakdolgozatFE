import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TopicListComponent } from './topic-list/topic-list.component';
import { TopicComponent } from './topic/topic.component';
import { NewTopicComponent } from './new-topic/new-topic.component';
import { ForumShellComponent } from './forum-shell/forum-shell.component';
import { CommentListComponent } from '../shared/comment-list/comment-list.component';

const forumRoutes: Routes = [
  {
    path: '', component: ForumShellComponent,
    children: [
      { path: '', component: TopicListComponent },
      { path: 'new-topic', component: NewTopicComponent },
      { path: ':id', component: TopicComponent },
      { path: 'topic-comments', component: CommentListComponent, outlet: 'topicComments' }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(forumRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class ForumRoutingModule { }
