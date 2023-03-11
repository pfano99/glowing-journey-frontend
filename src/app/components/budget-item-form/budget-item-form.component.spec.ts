import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetItemFormComponent } from './budget-item-form.component';

describe('BudgetItemFormComponent', () => {
  let component: BudgetItemFormComponent;
  let fixture: ComponentFixture<BudgetItemFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BudgetItemFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BudgetItemFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
