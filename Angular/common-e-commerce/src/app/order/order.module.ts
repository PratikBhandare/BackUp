import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderRouting } from './order-routing.module';
import { OrderListComponent } from './order-list/order-list.component';
import { OrderDetailComponent } from './order-detail/order-detail.component';

@NgModule({
  declarations: [
    OrderListComponent,
    OrderDetailComponent
  ],
  imports: [
    CommonModule,
    OrderRouting
  ],
})
export class OrderModule { }
