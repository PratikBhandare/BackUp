import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductRouting } from './product-routing.module';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductService } from './product.service';



@NgModule({
  declarations: [
    ProductDetailComponent,
    ProductListComponent
  ],
  imports: [
    CommonModule,
    ProductRouting
  ],
  providers: [
    ProductService
  ]
})
export class ProductModule { }
