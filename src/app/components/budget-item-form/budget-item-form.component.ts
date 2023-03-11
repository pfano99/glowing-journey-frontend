import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BudgetItems } from 'src/app/models/budgetItems';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-budget-item-form',
  templateUrl: './budget-item-form.component.html',
  styleUrls: ['./budget-item-form.component.css']
})
export class BudgetItemFormComponent {

  @Input() btnText = "budget";

  @Output() formDataEmitter = new EventEmitter<BudgetItems>();

  budgetItemName!: string;
  price!: number;
  itemsCount!: number;

  constructor(private modalService: NgbModal) { }

  onSubmit() {
    const newBudget: BudgetItems = {
      name: this.budgetItemName,
      price: this.price,
      itemsCount: this.itemsCount,
    }
    this.formDataEmitter.emit(newBudget);
    this.clearForm()
  }

  clearForm() {
    this.budgetItemName = '';
    this.price = 0;
    this.itemsCount = 0;
  }

  open(content: any) {
    this.modalService.open(content).result.then(
    );
  }

}
