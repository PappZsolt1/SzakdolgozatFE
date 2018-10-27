import { Directive, Input } from '@angular/core';
import { Validator, NG_VALIDATORS, AbstractControl } from '@angular/forms';

@Directive({
  selector: '[appCustomMin]',
  providers: [{provide: NG_VALIDATORS, useExisting: CustomMinDirective, multi: true}]
})
export class CustomMinDirective implements Validator {

  @Input() customMin: number;

  constructor() { }

  validate(control: AbstractControl): {[key: string]: any} | null {
    let v = control.value;
    
  }
}
