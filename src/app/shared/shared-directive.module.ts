import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomTextDirective } from './custom-text.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CustomTextDirective],
  exports: [CustomTextDirective]
})
export class SharedDirectiveModule { }
