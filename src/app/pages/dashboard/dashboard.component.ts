import { Component, OnInit } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Account } from 'src/app/models/Account';
import { Transaction } from 'src/app/models/Transaction';
import { AccountService } from 'src/app/service/account.service';
import { TransactionService } from 'src/app/service/transaction.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  transactions?: any[];

  currentUserId: number = 1;

  currentUserAccount: Account[] = [];

  newTransactionBtn = "add transaction"

  newAccountBtn = "add account"

  currentAccount!: Account;

  newAccountAddedEvent?: Account;

  currentAccountId: number = -1;

  constructor(private transactionService: TransactionService, private accountService: AccountService) { }

  getTransactions(account: Account) {
    this.currentAccountId = account.id || -1;
    this.currentAccount = account;
    if (account.id != undefined) {
      this.transactionService.getAllAccountTransactions(account.id).subscribe(
        data => {
          this.transactions = data;
        }
      )
    }
  }

  addNewTransaction(data: Transaction) {
    this.transactionService.addNewTransaction(data, this.currentAccount.id || 1).subscribe(
      data => {
        this.transactions?.push(data);
      }
    );
  }

  addNewAccount(data: Account) {
    this.accountService.addAccount(data, this.currentUserId).subscribe(
      data => {
        this.newAccountAddedEvent = data;
      }
    );
  }
}
