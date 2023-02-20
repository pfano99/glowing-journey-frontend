import { Component, OnInit } from '@angular/core';
import { Account } from 'src/app/models/Account';
import { AccountService } from 'src/app/service/account.service';

@Component({
  selector: 'app-accounts-header',
  templateUrl: './accounts-header.component.html',
  styleUrls: ['./accounts-header.component.css']
})
export class AccountsHeaderComponent implements OnInit {

  accounts!: any;

  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
    this.accountService.getAllUserAccounts(1).subscribe(
      data => {
        this.accounts = data;
      }
    )
  }

  


}
