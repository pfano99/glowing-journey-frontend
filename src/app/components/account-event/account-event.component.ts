import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { AccountEvent } from 'src/app/models/AccountEvent';
import { AccountEventService } from 'src/app/service/account-event.service';

@Component({
  selector: 'app-account-event',
  templateUrl: './account-event.component.html',
  styleUrls: ['./account-event.component.css']
})
export class AccountEventComponent implements OnChanges {

  @Input() accountId: number = -1;

  newEventBtn = "add event"

  eventBalance: number = 0;

  events: any = [];

  constructor(private accountEventService: AccountEventService) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.accountId != -1) {
      this.accountEventService.getAllAccountEvents(this.accountId).subscribe(
        data => {
          this.events = data;
          this.eventBalance = 0;
          this.calculateEventsBalance();
        }
      )
    }
  }

  calculateEventsBalance() {
    for (let event of this.events) {
      this.eventBalance += event.amount;
    }
  }

  addNewEvent(data: AccountEvent) {
    this.accountEventService.addEvent(
      data, this.accountId
    ).subscribe(
      data => {
        this.events.push(data);
        this.eventBalance = 0;
        this.calculateEventsBalance();
      }
    )
  }

}
