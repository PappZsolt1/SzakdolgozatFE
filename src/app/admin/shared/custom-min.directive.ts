import { Directive, Input } from '@angular/core';
import { Validator, NG_VALIDATORS, AbstractControl, ValidatorFn } from '@angular/forms';

@Directive({
  selector: '[appCustomMin]',
  providers: [{provide: NG_VALIDATORS, useExisting: CustomMinDirective, multi: true}]
})
export class CustomMinDirective implements Validator {

  @Input('appCustomMin') customMin: number;

  constructor() { }

  validate(control: AbstractControl): {[key: string]: any} | null {
    return this.customMin ? this.customMinValidator(this.customMin)(control) : null;
  }

  customMinValidator(min: number): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} | null => {
      let v = control.value;
      if (isNaN(v) || v < min || !Number.isInteger(v)) {
        return {'customMin': { valid: false }};
      } else {
        return null;
      }
    }
  }
}
