import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Budget } from 'src/app/models/Budget';

@Component({
  selector: 'app-budget-form',
  templateUrl: './budget-form.component.html',
  styleUrls: ['./budget-form.component.css']
})
export class BudgetFormComponent {

  @Input() btnText = "budget";

  @Output() formDataEmitter = new EventEmitter<Budget>();


  budgetName!: string;
  description!: string;

  constructor(private modalService: NgbModal) { }

  onSubmit() {
    const newBudget: Budget = {
      name: this.budgetName,
      description: this.description,
      cost: 0,
    }
    this.formDataEmitter.emit(newBudget);
    this.clearForm()
  }

  clearForm() {
    this.budgetName = '';
    this.description = '';
  }

  open(content: any) {
    this.modalService.open(content).result.then(
    );
  }

}
