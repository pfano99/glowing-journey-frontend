import { Component, OnInit } from '@angular/core';
import { Account } from 'src/app/models/Account';
import { AccountService } from 'src/app/service/account.service';

@Component({
  selector: 'app-account-form',
  templateUrl: './account-form.component.html',
  styleUrls: ['./account-form.component.css']
})
export class AccountFormComponent {

  accountName!: string;
  balance!: number;
  accountType!: string;

  constructor(private accountService: AccountService) {}

  onSubmit() {

    const newAccount: Account = {
      name: this.accountName,
      balance: this.balance,
      accountType: this.accountType,
    }

    this.accountService.addAccount(newAccount).subscribe(
      data => {
        console.log(data)
      }
    );
  }


}
