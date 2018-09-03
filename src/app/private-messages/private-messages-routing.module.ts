import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PrivateMessagesShellComponent } from './private-messages-shell/private-messages-shell.component';
import { ConversationComponent } from './conversation/conversation.component';
import { ConversationListComponent } from './conversation-list/conversation-list.component';

const privateMessagesRoutes: Routes = [
  { path: '', component: PrivateMessagesShellComponent },
  { path: 'conversation-list', component: ConversationListComponent },
  { path: 'conversation/:id', component: ConversationComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(privateMessagesRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class PrivateMessagesRoutingModule { }
