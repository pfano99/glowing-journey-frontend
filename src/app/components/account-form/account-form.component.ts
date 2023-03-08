import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { Account } from 'src/app/models/Account';

@Component({
  selector: 'app-account-form',
  templateUrl: './account-form.component.html',
  styleUrls: ['./account-form.component.css']
})
export class AccountFormComponent {

  @Input() userId: number = 1;

  @Input() btnText = "account";

  @Output() formDataEmitter = new EventEmitter<Account>();


  accountName!: string;
  balance!: number;
  accountType!: string;

  constructor(private modalService: NgbModal) { }

  onSubmit() {
    const newAccount: Account = {
      name: this.accountName,
      balance: this.balance,
      accountType: this.accountType,
    }
    this.formDataEmitter.emit(newAccount);
    this.clearForm()
  }

  clearForm() {
    this.accountName = '';
    this.balance = 0;
    this.accountType = '';
  }

  open(content: any) {
    this.modalService.open(content).result.then(
    );
  }

}
