import { CustomDateDirective } from './custom-date.directive';
import { Component } from '@angular/core';
import { TestBed, async } from '@angular/core/testing';
import { FormsModule, NgForm } from '@angular/forms';
import { By } from '@angular/platform-browser';

@Component({
  template: `
  <form>
    <input type="date" name="birthDate" ngModel appCustomDate="1750,2100">
  </form>
  `
})
class TestComponent {}

describe('CustomDateDirective', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [TestComponent, CustomDateDirective]
    });
  });

  it('should validate', async(() => {
    let fixture = TestBed.createComponent(TestComponent);
    let comp = fixture.componentInstance;
    let debug = fixture.debugElement;
    let input = debug.query(By.css('[name=birthDate]'));

    fixture.detectChanges();
    fixture.whenStable().then(() => {
      input.nativeElement.value = "2101-02-21";
      input.nativeElement.dispatchEvent(new Event("input"));
      fixture.detectChanges();

      let form: NgForm = debug.children[0].injector.get(NgForm);
      let control = form.control.get('birthDate');
      
      expect(control.hasError('customDate')).toBe(true);
      expect(form.control.valid).toEqual(false);
      expect(form.control.hasError('customDate', ['birthDate'])).toEqual(true);

      input.nativeElement.value = '2100-11-05';
      input.nativeElement.dispatchEvent(new Event("input"));
      fixture.detectChanges();

      expect(control.hasError('customDate')).toBe(false);
      expect(form.control.valid).toEqual(true);
      expect(form.control.hasError('customDate', ['birthDate'])).toEqual(false);

      input.nativeElement.value = '1750-01-25';
      input.nativeElement.dispatchEvent(new Event("input"));
      fixture.detectChanges();

      expect(control.hasError('customDate')).toBe(false);
      expect(form.control.valid).toEqual(true);
      expect(form.control.hasError('customDate', ['birthDate'])).toEqual(false);

      input.nativeElement.value = "1749-07-03";
      input.nativeElement.dispatchEvent(new Event("input"));
      fixture.detectChanges();

      expect(control.hasError('customDate')).toBe(true);
      expect(form.control.valid).toEqual(false);
      expect(form.control.hasError('customDate', ['birthDate'])).toEqual(true);
    });
  }));
});
