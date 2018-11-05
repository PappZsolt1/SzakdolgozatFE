import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl, ValidatorFn } from '@angular/forms';

@Directive({
  selector: '[appCustomDate]',
  providers: [{provide: NG_VALIDATORS, useExisting: CustomDateDirective, multi: true}]

})
export class CustomDateDirective implements Validator {

  @Input('appCustomDate') range: string;
  
  constructor() { }

  validate(control: AbstractControl): {[key: string]: any} | null {
    return this.range ? this.customMinValidator(this.range)(control) : null;
  }

  customMinValidator(range: string): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} | null => {
      let v = control.value;
      let array = range.split(",");
      let min = +array[0];
      let max = +array[1];
      let year;
      if (v) {
        year = +(v.substring(0, v.indexOf("-")));
      }
      if (!year || year < min || year > max) {
        return {'customDate': { valid: false }};
      } else {
        return null;
      }
    }
  }
}
