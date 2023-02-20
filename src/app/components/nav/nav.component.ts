import { Component } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {

  constructor(private modalService: NgbModal) { }

  open(content: any) {
    this.modalService.open(content).result.then(
    );
  }


}
