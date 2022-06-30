import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { OrderService } from '../order.service';
import { OrderModalComponent } from '../orderform/order-modal.component';
import { Order } from '../orderform/Order.model';


@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {
  public orderForm: FormGroup ;
  @Input() order?: Order;
  orders:any=[];
  form!: FormGroup;
  constructor(public activeModal: NgbActiveModal,private fb:FormBuilder, private modalService: NgbModal,private orderservice:OrderService,private router:ActivatedRoute,private route:Router) { 
  
    this.orderForm = this.fb.group({
      phone: '',
      address: '',
      dueDate: '',
      custName:'',
      orderTotal:'',
    });
     
  }

  ngOnInit(): void {
    this.orderservice.getOrder().subscribe(
      (resp:any)=>{
        console.log(resp);
        this.orders=resp;
      }
    )
    this.router.paramMap.subscribe(params=>{
      const orderId= params.get('id');
      if(orderId){
        this.getOrder(orderId);
      }
    })

    
  }

  getOrder(id:any) {
    this.orderservice.getOrderById(id).subscribe(
      (order:Order)=>{
        this.editOrder(order)
      }
    )
  }
  editOrder(order:Order){
    this.orderForm.patchValue({
      custName:order.custName,
      phone:order.phone,
      address:order.address,
      orderTotal:order.orderTotal,
      dueDate:order.dueDate
    })
  }

  open(order: Order, isEdit: boolean) {
    const modalRef = this.modalService.open(OrderModalComponent);
    modalRef.componentInstance.order = order;
    modalRef.componentInstance.isEdit = isEdit;
    if(isEdit){
      modalRef.componentInstance.formData = {
        'custName' : order.custName,
        'phone':order.phone,
        'address':order.address,
        'orderTotal':order.orderTotal,
        'id':order.id,
        'dueDate':order.dueDate
      }
    }
    
  }

  updateData(obj:Order){
    // console.log("update");
    this.route.navigate(['/modal',obj.id])
    this.orderservice.update(obj.id,obj).subscribe(
      resp=>{
        console.log(resp);
        this.updateOrder();
      }
    )
   }

   private updateOrder() {
    this.orderservice.update(this.orders.id, this.form.value).subscribe(
      resp=>{
        console.log(resp);
      }
    )    
  }

  deleteItem(items:any){  
    this.orders.pop(items);
    console.log(items);
    console.log(items.id);
    this.orderservice.deletePost(items.id).subscribe(
      (resp: any) => console.log(resp)
      
    )
   
  }

  
  myform= new FormGroup({
    phone: new FormControl(''),
    dueDate: new FormControl(''),
    address: new FormControl(''),
    custName:new FormControl(''),
    orderTotal: new FormControl(''),

  })

 
  onSubmit() {
   
      this.order = this.orderForm.value;
    
}

}
