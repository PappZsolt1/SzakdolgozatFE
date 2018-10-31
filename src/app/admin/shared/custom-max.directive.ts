import { Directive, Input } from '@angular/core';
import { Validator, NG_VALIDATORS, AbstractControl, ValidatorFn } from '@angular/forms';

@Directive({
  selector: '[appCustomMax]',
  providers: [{provide: NG_VALIDATORS, useExisting: CustomMaxDirective, multi: true}]
})
export class CustomMaxDirective implements Validator {

  @Input('appCustomMax') customMax: number;

  constructor() { }

  validate(control: AbstractControl): {[key: string]: any} | null {
    return this.customMax ? this.customMaxValidator(this.customMax)(control) : null;
  }

  customMaxValidator(max: number): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} | null => {
      let v = control.value;
      if (isNaN(v) || v > max || !Number.isInteger(v)) {
        return {'customMax': { valid: false }};
      } else {
        return null;
      }
    }
  }
}
