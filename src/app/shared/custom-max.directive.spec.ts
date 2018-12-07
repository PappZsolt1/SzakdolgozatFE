import { CustomMaxDirective } from './custom-max.directive';
import { Component } from '@angular/core';
import { TestBed, async } from '@angular/core/testing';
import { FormsModule, NgForm } from '@angular/forms';
import { By } from '@angular/platform-browser';

@Component({
  template: `
  <form>
    <input type="number" name="releaseYear" ngModel appCustomMax="2100">
  </form>
  `
})
class TestComponent {}

describe('CustomMaxDirective', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [TestComponent, CustomMaxDirective]
    });
  });

  it('should validate', async(() => {
    let fixture = TestBed.createComponent(TestComponent);
    let comp = fixture.componentInstance;
    let debug = fixture.debugElement;
    let input = debug.query(By.css('[name=releaseYear]'));

    fixture.detectChanges();
    fixture.whenStable().then(() => {
      input.nativeElement.value = "2101";
      input.nativeElement.dispatchEvent(new Event("input"));
      fixture.detectChanges();

      let form: NgForm = debug.children[0].injector.get(NgForm);
      let control = form.control.get('releaseYear');
      
      expect(control.hasError('customMax')).toBe(true);
      expect(form.control.valid).toEqual(false);
      expect(form.control.hasError('customMax', ['releaseYear'])).toEqual(true);

      input.nativeElement.value = '2100';
      input.nativeElement.dispatchEvent(new Event("input"));
      fixture.detectChanges();

      expect(control.hasError('customMax')).toBe(false);
      expect(form.control.valid).toEqual(true);
      expect(form.control.hasError('customMax', ['releaseYear'])).toEqual(false);

      input.nativeElement.value = '2000.1';
      input.nativeElement.dispatchEvent(new Event("input"));
      fixture.detectChanges();

      expect(control.hasError('customMax')).toBe(true);
      expect(form.control.valid).toEqual(false);
      expect(form.control.hasError('customMax', ['releaseYear'])).toEqual(true);

      input.nativeElement.value = 'a2000';
      input.nativeElement.dispatchEvent(new Event("input"));
      fixture.detectChanges();

      expect(control.hasError('customMax')).toBe(true);
      expect(form.control.valid).toEqual(false);
      expect(form.control.hasError('customMax', ['releaseYear'])).toEqual(true);
    });
  }));
});
