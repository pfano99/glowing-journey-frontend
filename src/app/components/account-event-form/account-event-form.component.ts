import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AccountEvent } from 'src/app/models/AccountEvent';


@Component({
  selector: 'app-account-event-form',
  templateUrl: './account-event-form.component.html',
  styleUrls: ['./account-event-form.component.css']
})
export class AccountEventFormComponent {

  @Input() btnText = "event";

  @Output() formDataEmitter = new EventEmitter<AccountEvent>();

  eventName!: string;
  amount!: number;
  eventType!: string;
  eventDate!: number;

  constructor(private modalService: NgbModal) { }

  onSubmit() {
    const newAccount: AccountEvent = {
      name: this.eventName,
      amount: this.amount,
      eventType: this.eventType,
      eventDate: this.eventDate,
    }
    this.formDataEmitter.emit(newAccount);
    this.clearForm()
  }

  clearForm() {
    this.eventName = '';
    this.amount = 0;
    this.eventDate = 0;
    this.eventType = '';
  }

  open(content: any) {
    this.modalService.open(content).result.then(
    );
  }

}
