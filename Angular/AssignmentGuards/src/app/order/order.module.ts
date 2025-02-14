import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateorderComponent } from './createorder/createorder.component';
import { OrderlistComponent } from './orderlist/orderlist.component';
import { OrderRoutingModule } from './order-routing.module';
import { OrderdetailsComponent } from './orderdetails/orderdetails.component';
import { CartComponent } from './cart/cart.component';




@NgModule({
  declarations: [
    CreateorderComponent,
    OrderlistComponent,
    OrderdetailsComponent,
    CartComponent
  ],
  imports: [
    CommonModule,
  ],
  exports:[
    CreateorderComponent,
    OrderlistComponent,
    OrderdetailsComponent
    
  ]
})
export class OrderModule { 
    constructor(){
        console.log("Order Module is Imported !!");
    }
}
