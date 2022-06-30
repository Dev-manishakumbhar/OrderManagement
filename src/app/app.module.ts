import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// for modal added below two
import { NgbActiveModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { OrderModalComponent } from './orderform/order-modal.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    OrderModalComponent,
    LoginComponent,
    OrderDetailsComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
    
  ],
  entryComponents: [OrderModalComponent],
  providers: [NgbActiveModal],
  bootstrap: [AppComponent]
})
export class AppModule { }
