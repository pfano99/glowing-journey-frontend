import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { Budget } from 'src/app/models/Budget';
import { BudgetService } from 'src/app/service/budget.service';

@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.css']
})
export class BudgetComponent {

  @Output() activeBudgetIdEvent = new EventEmitter<Budget>();

  budgets: any = [];

  constructor(private budgetService: BudgetService) {

    this.budgetService.getAllBudgets(1).subscribe(
      data => {
        this.budgets = data;
      }
    )
  }

  updateActiveBudget(data: Budget) {
    this.activeBudgetIdEvent.emit(data);
  }

}
