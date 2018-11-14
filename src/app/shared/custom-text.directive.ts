import { Directive } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl, ValidatorFn } from '@angular/forms';

@Directive({
  selector: '[appCustomText]',
  providers: [{provide: NG_VALIDATORS, useExisting: CustomTextDirective, multi: true}]
})
export class CustomTextDirective implements Validator {

  constructor() { }

  validate(control: AbstractControl): {[key: string]: any} | null {
    return this.customTextValidator()(control);
  }

  customTextValidator(): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} | null => {
      let v = control.value;
      if (!v || v.trim() === "" || !/^\S/.test(v) || !/\S$/.test(v)) {
        return {'customText': { valid: false }};
      } else {
        return null;
      }
    }
  }
}
