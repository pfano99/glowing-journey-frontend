import { Component, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AccountEventService } from 'src/app/service/account-event.service';
import { AccountService } from 'src/app/service/account.service';
import { TransactionService } from 'src/app/service/transaction.service';

@Component({
  selector: 'app-delete-confirm-modal',
  templateUrl: './delete-confirm-modal.component.html',
  styleUrls: ['./delete-confirm-modal.component.css']
})
export class DeleteConfirmModalComponent {

  closeResult = '';

  @Input() actionName: string = "object"

  @Input() btnText: string = "delete";

  @Input() actionType: number = -1;

  @Input() targetId: number = -1;

  @Input() targetClass: string = "btn btn-outline-dark";

  @Input() targetStyles = {};

  constructor(private modalService: NgbModal,
    private accountService: AccountService,
    private accountEventService: AccountEventService,
    private transactionService: TransactionService) { }

  open(content: any) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(
      (result) => {
        if (result == "Delete click") {
          this.onDelete();
        }
      }
    );
  }

  onDelete() {
    switch (this.actionType) {
      case 1:
        this.deleteAccount(this.targetId);
        break;
      case 2:
        this.deleteTransaction(this.targetId);
        break;
      case 3:
        this.deleteAccountEvent(this.targetId);
        break;
      default:
        console.log("failed to delete!")
    }
  }

  deleteAccount(id: number) {
    this.accountService.deleteAccount(id);
  }

  deleteTransaction(id: number) {
    this.transactionService.deleteTransaction(id);
  }

  deleteAccountEvent(id: number) {
    this.accountEventService.deleteAccountEvent(id);
  }
}
