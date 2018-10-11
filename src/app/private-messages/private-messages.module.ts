import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrivateMessagesRoutingModule } from './private-messages-routing.module';
import { PrivateMessagesShellComponent } from './private-messages-shell/private-messages-shell.component';
import { PrivateMessagesService } from './shared/private-message.service';
import { ConversationListComponent } from './conversation-list/conversation-list.component';
import { ConversationComponent } from './conversation/conversation.component';
import { ConversationService } from './shared/conversation.service';

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
    PrivateMessagesService,
    ConversationService
  ]
})
export class PrivateMessagesModule { }
