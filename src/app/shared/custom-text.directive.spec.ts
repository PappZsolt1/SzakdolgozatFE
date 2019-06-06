import { CustomTextDirective } from './custom-text.directive';
import { Component } from '@angular/core';
import { TestBed, async } from '@angular/core/testing';
import { FormsModule, NgForm } from '@angular/forms';
import { By } from '@angular/platform-browser';

@Component({
  template: `
  <form>
    <textarea name="bio" ngModel appCustomText></textarea>
  </form>
  `
})
class TestComponent {}

describe('CustomTextDirective', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [TestComponent, CustomTextDirective]
    });
  });

  it('should validate', async(() => {
    let fixture = TestBed.createComponent(TestComponent);
    let comp = fixture.componentInstance;
    let debug = fixture.debugElement;
    let input = debug.query(By.css('[name=bio]'));

    fixture.detectChanges();
    fixture.whenStable().then(() => {
      input.nativeElement.value = "asd";
      input.nativeElement.dispatchEvent(new Event("input"));
      fixture.detectChanges();

      let form: NgForm = debug.children[0].injector.get(NgForm);
      let control = form.control.get('bio');
      
      expect(control.hasError('customText')).toBe(false);
      expect(form.control.valid).toEqual(true);
      expect(form.control.hasError('customText', ['bio'])).toEqual(false);

      input.nativeElement.value = 'aa b';
      input.nativeElement.dispatchEvent(new Event("input"));
      fixture.detectChanges();

      expect(control.hasError('customText')).toBe(false);
      expect(form.control.valid).toEqual(true);
      expect(form.control.hasError('customText', ['bio'])).toEqual(false);

      input.nativeElement.value = 'aa b \nx';
      input.nativeElement.dispatchEvent(new Event("input"));
      fixture.detectChanges();

      expect(control.hasError('customText')).toBe(false);
      expect(form.control.valid).toEqual(true);
      expect(form.control.hasError('customText', ['bio'])).toEqual(false);

      input.nativeElement.value = '';
      input.nativeElement.dispatchEvent(new Event("input"));
      fixture.detectChanges();

      expect(control.hasError('customText')).toBe(true);
      expect(form.control.valid).toEqual(false);
      expect(form.control.hasError('customText', ['bio'])).toEqual(true);

      input.nativeElement.value = ' asd';
      input.nativeElement.dispatchEvent(new Event("input"));
      fixture.detectChanges();

      expect(control.hasError('customText')).toBe(true);
      expect(form.control.valid).toEqual(false);
      expect(form.control.hasError('customText', ['bio'])).toEqual(true);

      input.nativeElement.value = ' tt  r';
      input.nativeElement.dispatchEvent(new Event("input"));
      fixture.detectChanges();

      expect(control.hasError('customText')).toBe(true);
      expect(form.control.valid).toEqual(false);
      expect(form.control.hasError('customText', ['bio'])).toEqual(true);

      input.nativeElement.value = '\na';
      input.nativeElement.dispatchEvent(new Event("input"));
      fixture.detectChanges();

      expect(control.hasError('customText')).toBe(true);
      expect(form.control.valid).toEqual(false);
      expect(form.control.hasError('customText', ['bio'])).toEqual(true);

      input.nativeElement.value = '\ta';
      input.nativeElement.dispatchEvent(new Event("input"));
      fixture.detectChanges();

      expect(control.hasError('customText')).toBe(true);
      expect(form.control.valid).toEqual(false);
      expect(form.control.hasError('customText', ['bio'])).toEqual(true);

      input.nativeElement.value = '\rg';
      input.nativeElement.dispatchEvent(new Event("input"));
      fixture.detectChanges();

      expect(control.hasError('customText')).toBe(true);
      expect(form.control.valid).toEqual(false);
      expect(form.control.hasError('customText', ['bio'])).toEqual(true);

      input.nativeElement.value = 'ert ert ';
      input.nativeElement.dispatchEvent(new Event("input"));
      fixture.detectChanges();

      expect(control.hasError('customText')).toBe(true);
      expect(form.control.valid).toEqual(false);
      expect(form.control.hasError('customText', ['bio'])).toEqual(true);

      input.nativeElement.value = 'a\n';
      input.nativeElement.dispatchEvent(new Event("input"));
      fixture.detectChanges();

      expect(control.hasError('customText')).toBe(true);
      expect(form.control.valid).toEqual(false);
      expect(form.control.hasError('customText', ['bio'])).toEqual(true);

      input.nativeElement.value = 'a\t';
      input.nativeElement.dispatchEvent(new Event("input"));
      fixture.detectChanges();

      expect(control.hasError('customText')).toBe(true);
      expect(form.control.valid).toEqual(false);
      expect(form.control.hasError('customText', ['bio'])).toEqual(true);

      input.nativeElement.value = 'a\r';
      input.nativeElement.dispatchEvent(new Event("input"));
      fixture.detectChanges();

      expect(control.hasError('customText')).toBe(true);
      expect(form.control.valid).toEqual(false);
      expect(form.control.hasError('customText', ['bio'])).toEqual(true);
    });
  }));
});
