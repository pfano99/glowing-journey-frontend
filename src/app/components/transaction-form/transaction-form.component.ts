import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { Account } from 'src/app/models/Account';
import { Transaction } from 'src/app/models/Transaction';

@Component({
  selector: 'app-transaction-form',
  templateUrl: './transaction-form.component.html',
  styleUrls: ['./transaction-form.component.css']
})
export class TransactionFormComponent {

  @Input() btnText = "transaction"

  @Input() userAccountList: Account[] = [];

  @Output() formDataEmitter = new EventEmitter<Transaction>();

  description: string = '';
  amount: number = 0;
  transactionType: string = '';
  transactionDate = '';

  constructor(private modalService: NgbModal) { }

  onSubmit() {

    const newTransaction: Transaction = {
      description: this.description,
      amount: this.amount,
      transactionDate: this.transactionDate,
      transactionType: this.transactionType,
      account: {
        id: 1,
        name: "Savings",
        balance: 2000.55,
        accountType: "SAVING",
      }
    }
    this.formDataEmitter.emit(newTransaction);
    this.clearForm();
  }

  clearForm() {
    this.description = '';
    this.amount = 0;
    this.transactionType = '';
    this.transactionDate = '';
  }

  open(content: any) {
    this.modalService.open(content, { size: 'lg' }).result.then(
    );
  }

}
