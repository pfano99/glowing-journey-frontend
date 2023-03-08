import { Component, OnInit, Output, Input, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { Account } from 'src/app/models/Account';
import { AccountService } from 'src/app/service/account.service';

@Component({
  selector: 'app-accounts-header',
  templateUrl: './accounts-header.component.html',
  styleUrls: ['./accounts-header.component.css']
})
export class AccountsHeaderComponent implements OnInit, OnChanges {


  @Input() userId: number = -1;


  @Output() selectedAccountIdEvent = new EventEmitter<Account>();


  @Input() newAccountAddedEvent?: Account;

  accounts!: any;

  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
    this.getAccounts();
  }

  getAccounts() {
    this.accountService.getAllUserAccounts(1).subscribe(
      data => {
        this.accounts = data;
        this.selectedAccountIdEvent.emit(data[0]);
      }
    )
  }


  updateSelectedAccount(index: number) {
    this.selectedAccountIdEvent.emit(this.accounts[index]);
  }

  ngOnChanges(changes: SimpleChanges): void {
    // Todo Implement a better solution
    this.accounts.push(changes["newAccountAddedEvent"]["currentValue"]);
  }

}
