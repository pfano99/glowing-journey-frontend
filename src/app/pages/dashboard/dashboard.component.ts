import { Component, OnInit } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TransactionService } from 'src/app/service/transaction.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  transactions?: any[];

  constructor(private modalService: NgbModal, private transactionService: TransactionService) { }

  ngOnInit(): void {
    this.transactionService.getAllAccountTransactions(1).subscribe(
      data => {
        this.transactions = data;
      }
    )
  }

  open(content: any) {
    this.modalService.open(content, { windowClass: 'myCustomModalClass' }).result.then(

    );

  }
}
