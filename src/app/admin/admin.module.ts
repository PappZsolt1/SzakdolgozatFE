import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminShellComponent } from './admin-shell/admin-shell.component';
import { ActorComponent } from './actor/actor.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AdminRoutingModule
  ],
  declarations: [
    AdminShellComponent,
    ActorComponent
  ]
})
export class AdminModule { }
