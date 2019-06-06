import { CustomMinDirective } from './custom-min.directive';
import { Component } from '@angular/core';
import { TestBed, async } from '@angular/core/testing';
import { FormsModule, NgForm } from '@angular/forms';
import { By } from '@angular/platform-browser';

@Component({
  template: `
  <form>
    <input type="number" name="releaseYear" ngModel appCustomMin="1850">
  </form>
  `
})
class TestComponent {}

describe('CustomMinDirective', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [TestComponent, CustomMinDirective]
    });
  });

  it('should validate', async(() => {
    let fixture = TestBed.createComponent(TestComponent);
    let comp = fixture.componentInstance;
    let debug = fixture.debugElement;
    let input = debug.query(By.css('[name=releaseYear]'));

    fixture.detectChanges();
    fixture.whenStable().then(() => {
      input.nativeElement.value = "1849";
      input.nativeElement.dispatchEvent(new Event("input"));
      fixture.detectChanges();

      let form: NgForm = debug.children[0].injector.get(NgForm);
      let control = form.control.get('releaseYear');
      
      expect(control.hasError('customMin')).toBe(true);
      expect(form.control.valid).toEqual(false);
      expect(form.control.hasError('customMin', ['releaseYear'])).toEqual(true);

      input.nativeElement.value = '1850';
      input.nativeElement.dispatchEvent(new Event("input"));
      fixture.detectChanges();

      expect(control.hasError('customMin')).toBe(false);
      expect(form.control.valid).toEqual(true);
      expect(form.control.hasError('customMin', ['releaseYear'])).toEqual(false);

      input.nativeElement.value = '1900.8';
      input.nativeElement.dispatchEvent(new Event("input"));
      fixture.detectChanges();

      expect(control.hasError('customMin')).toBe(true);
      expect(form.control.valid).toEqual(false);
      expect(form.control.hasError('customMin', ['releaseYear'])).toEqual(true);

      input.nativeElement.value = '1910x';
      input.nativeElement.dispatchEvent(new Event("input"));
      fixture.detectChanges();

      expect(control.hasError('customMin')).toBe(true);
      expect(form.control.valid).toEqual(false);
      expect(form.control.hasError('customMin', ['releaseYear'])).toEqual(true);
    });
  }));
});
