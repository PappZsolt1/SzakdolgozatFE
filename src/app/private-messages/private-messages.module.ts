import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrivateMessagesRoutingModule } from './private-messages-routing.module';
import { PrivateMessagesShellComponent } from './private-messages-shell/private-messages-shell.component';
import { PrivateMessagesService } from './private-messages.service';

@NgModule({
  imports: [
    CommonModule,
    PrivateMessagesRoutingModule
  ],
  declarations: [
    PrivateMessagesShellComponent
  ],
  providers: [
    PrivateMessagesService
  ]
})
export class PrivateMessagesModule { }
