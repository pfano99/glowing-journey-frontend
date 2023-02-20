import { Component } from '@angular/core';
import { Transaction } from 'src/app/models/Transaction';
import { TransactionService } from 'src/app/service/transaction.service';
@Component({
  selector: 'app-transaction-form',
  templateUrl: './transaction-form.component.html',
  styleUrls: ['./transaction-form.component.css']
})
export class TransactionFormComponent {

  description: string = '';
  amount: number = 0;
  transactionType: string = '';
  transactionDate: string = '';

  constructor(private transactionService:TransactionService){}

  onSubmit() {

    const newTransaction: Transaction = {
      description: this.description,
      amount: this.amount,
      transactionDate: this.transactionDate,
      transactionType: this.transactionType,
      account: {
        id:1,
        name:"Savings",
        balance:2000.55,
        accountType:"SAVING",
      }
    }
    console.log(newTransaction)
    this.transactionService.addNewTransaction(newTransaction).subscribe(
      data => {
        console.log(data)
      }
    );
  }

}
