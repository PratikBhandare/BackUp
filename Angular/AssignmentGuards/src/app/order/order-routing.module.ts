import { createComponent, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  RouterModule, Routes } from '@angular/router';
import { CreateorderComponent } from './createorder/createorder.component';
import { OrderlistComponent } from './orderlist/orderlist.component';

import { OrderModule } from './order.module';
import { CustomerGuard } from '../auth/customer.guard';
import { CartComponent } from './cart/cart.component';

const routes:Routes=[
  {path:"order/createOrder",component:CreateorderComponent},
  // {path:"order/orderList",component:OrderlistComponent,canActivate:[LogInGuard]},
  {path:"order/orderList",component:OrderlistComponent, canActivate:[CustomerGuard]},
  {path:"order/cart",component:CartComponent, canActivate:[CustomerGuard]},
];






@NgModule({
  declarations: [

  ],
  imports: [
    
    RouterModule.forChild(routes),
  ],
  exports:[
    RouterModule,

  ]
})
export class OrderRoutingModule { }
