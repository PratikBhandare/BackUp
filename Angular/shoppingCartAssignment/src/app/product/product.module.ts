import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart/cart.component';
import { ProductlistComponent } from './productlist/productlist.component';



@NgModule({
  declarations: [
    CartComponent,
    ProductlistComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    CartComponent,
    ProductlistComponent
  ]
})
export class ProductModule { }
