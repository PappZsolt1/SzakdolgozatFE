import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PrivateMessagesShellComponent } from './private-messages-shell/private-messages-shell.component';

const privateMessagesRoutes: Routes = [
  { path: '', component: PrivateMessagesShellComponent }
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
