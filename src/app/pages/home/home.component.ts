import { Component } from '@angular/core';
import { Budget } from 'src/app/models/Budget';
import { BudgetItems } from 'src/app/models/budgetItems';
import { BudgetItemService } from 'src/app/service/budget-item.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  activeBudget: number = 0;

  budgetItems?: any[];

  budget: Budget = { name: "x", cost: 0, description: "" };

  constructor(private budgetItemService: BudgetItemService) { }

  updateBudgetItems(data: Budget) {
    console.log(data)
    const id: number = data.id || -1;
    this.budget = data;
    this.budgetItemService.getAllBudgetItems(id).subscribe(
      data => {
        this.budgetItems = data;
        this.activeBudget = data[0].id || -1;
      }
    )
  }

  addNewBudgetItem(data: BudgetItems) {
    this.budget.cost += data.price;
    this.budgetItemService.addBudgetItem(data, this.activeBudget).subscribe(
      data => {
        this.budgetItems?.push(data);
      }
    )
  }

}
