import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomTextDirective } from './custom-text.directive';
import { CustomMinDirective } from './custom-min.directive';
import { CustomMaxDirective } from './custom-max.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CustomTextDirective, CustomMinDirective, CustomMaxDirective],
  exports: [CustomTextDirective, CustomMinDirective, CustomMaxDirective]
})
export class SharedDirectiveModule { }
