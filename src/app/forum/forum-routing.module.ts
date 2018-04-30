import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TopicListComponent } from './topic-list/topic-list.component';
import { TopicComponent } from './topic/topic.component';
import { NewTopicComponent } from './new-topic/new-topic.component';

const forumRoutes: Routes = [
  { path: '', component: TopicListComponent },
  { path: 'topic/:id', component: TopicComponent },
  { path: 'new-topic', component: NewTopicComponent }
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
