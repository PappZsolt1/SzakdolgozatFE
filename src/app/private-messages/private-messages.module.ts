import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrivateMessagesRoutingModule } from './private-messages-routing.module';
import { PrivateMessagesShellComponent } from './private-messages-shell/private-messages-shell.component';
import { PrivateMessagesService } from './private-messages.service';
import { ConversationListComponent } from './conversation-list/conversation-list.component';
import { ConversationComponent } from './conversation/conversation.component';

@NgModule({
  imports: [
    CommonModule,
    PrivateMessagesRoutingModule
  ],
  declarations: [
    PrivateMessagesShellComponent,
    ConversationListComponent,
    ConversationComponent
  ],
  providers: [
    PrivateMessagesService
  ]
})
export class PrivateMessagesModule { }
