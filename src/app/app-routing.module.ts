import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { OrderModalComponent } from './orderform/order-modal.component';

const routes: Routes = [
  {
    path:"",
    component:LoginComponent
  },
  {
    path:"order",
    component:OrderDetailsComponent
  },
  {
    path:"modal",
    component:OrderModalComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
