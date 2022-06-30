import { Component } from '@angular/core';
// below 3 for modal
import {NgbActiveModal, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { OrderModalComponent } from './orderform/order-modal.component';
import { Order } from './orderform/Order.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-order-inventory';
  order ?: Order;
  

  constructor(public activeModal: NgbActiveModal, private modalService: NgbModal) { 
    this.order = {
      "address" : "Madaj",
      "custName" : "Shankar"
    }; 
  }

  open() {
    const modalRef = this.modalService.open(OrderModalComponent);
    modalRef.componentInstance.order = this.order;
  }
}
