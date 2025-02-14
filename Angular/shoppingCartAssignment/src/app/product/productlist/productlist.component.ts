import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-productlist',
  standalone: false,
  templateUrl: './productlist.component.html',
  styleUrl: './productlist.component.css'
})
export class ProductlistComponent {

  products!:any[];

  constructor(private productService:ProductService,private cartService:CartService){
    this.products=this.productService.products;
  }

  addToCart(id:number){
    this.cartService.addToCart(id);
  
  }




}
