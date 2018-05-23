import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminShellComponent } from './admin-shell/admin-shell.component';
import { ActorComponent } from './actor/actor.component';

const adminRoutes: Routes = [
  { path: '', component: AdminShellComponent },
  { path: 'actor', component: ActorComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(adminRoutes)
  ],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
