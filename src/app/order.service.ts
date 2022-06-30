import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';
// import { Order } from './order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http:HttpClient) { }
  getOrder() {
    return this.http.get("http://localhost:3000/orders");
}
 deletePost(id:number) {
  // let endPoints = `/posts/${id.orderId}`
 return this.http.delete("http://localhost:3000/orders/"+id )
}


 addPost(postData: Object) {
  let endPoints = "/posts"
  this.http.post("http://localhost:3000/orders", postData).subscribe(data => {
    console.log(data);
  });
}
update(id:any,postData:object){
  let endPoints = `/posts/${id}`
   return this.http.put("http://localhost:3000/orders" + endPoints, postData)
}

getOrderById(id:number){
  return this.http.get("http://localhost:3000/orders/" +id)
}
}


