import { Component, OnInit, Input } from '@angular/core';
import { Order } from "./Order.model";

import {NgbActiveModal, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { FormGroup } from '@angular/forms';
import { OrderService } from '../order.service';

@Component({
    selector: 'app-order-modal',
    templateUrl: './order-modal.component.html',
    styleUrls: ['./order-modal.component.css']
  })
  
  export class OrderModalComponent {
    public orderForm!: FormGroup 
  @Input() order?: Order;
  @Input() isEdit?: Boolean;
  formData:any={}; 
    constructor(public activeModal: NgbActiveModal,private orderservice:OrderService) {
     // console.log(this.ngbModal.activeInstances);
      this.formData.custName = this.order?.custName;
     }
     ngOnInit(): void {
      
     }
  
    onSubmit() {
   
      // this.order = this.orderForm.value;
      console.log(this.formData);
      this.orderservice.addPost( this.formData)
     

      
    
}


  }