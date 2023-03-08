import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountEventComponent } from './account-event.component';

describe('AccountEventComponent', () => {
  let component: AccountEventComponent;
  let fixture: ComponentFixture<AccountEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountEventComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
