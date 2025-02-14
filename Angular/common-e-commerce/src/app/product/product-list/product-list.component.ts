import { Component } from '@angular/core';
import { Product, ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  standalone: false,
  
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  products : Product[] = [];
  constructor(private productService : ProductService){
    this.products = productService.productArray;
  }
  order(productId : number){
    console.log(productId);
  }
}
