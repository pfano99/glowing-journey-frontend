import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountEventFormComponent } from './account-event-form.component';

describe('AccountEventFormComponent', () => {
  let component: AccountEventFormComponent;
  let fixture: ComponentFixture<AccountEventFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountEventFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountEventFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
