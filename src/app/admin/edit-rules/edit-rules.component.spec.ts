import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { EditRulesComponent } from './edit-rules.component';
import { FormsModule } from '@angular/forms';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { RulesService } from '../../shared/services/rules.service';
import { Location } from '@angular/common';
import { of } from 'rxjs';
import { Rules } from '../../shared/models/rules.model';

describe('EditRulesComponent', () => {
  let component: EditRulesComponent;
  let fixture: ComponentFixture<EditRulesComponent>;

  let location = jasmine.createSpyObj("Location", ["back"]);
  let backSpy = location.back;

  let r: Rules = { id: null, content: null };

  let rulesService = jasmine.createSpyObj("RulesService", ["getRules", "modifyRules"]);
  let getRulesSpy = rulesService.getRules.and.returnValue(of(r));
  let modifyRulesSpy = rulesService.modifyRules.and.returnValue(of());

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule ],
      declarations: [ EditRulesComponent ],
      providers: [
        { provide: Location, useValue: location },
        { provide: RulesService, useValue: rulesService }
      ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditRulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getRules on init', () => {
    expect(getRulesSpy).toHaveBeenCalled();
  });

  it('should buttons call methods', fakeAsync(() => {
    tick();
    let buttons = fixture.nativeElement.querySelectorAll("button");
    expect(buttons[0].textContent).toBe("Mentés");
    buttons[0].click();
    expect(modifyRulesSpy).toHaveBeenCalled();
    expect(buttons[1].textContent).toBe("Vissza");
    buttons[1].click();
    expect(backSpy).toHaveBeenCalled();
  }));
});
