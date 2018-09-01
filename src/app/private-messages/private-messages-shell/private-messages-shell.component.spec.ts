import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateMessagesShellComponent } from './private-messages-shell.component';

describe('PrivateMessagesShellComponent', () => {
  let component: PrivateMessagesShellComponent;
  let fixture: ComponentFixture<PrivateMessagesShellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrivateMessagesShellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivateMessagesShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
