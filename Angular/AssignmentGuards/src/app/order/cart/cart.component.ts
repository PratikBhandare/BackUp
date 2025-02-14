import { Component, OnInit } from '@angular/core';
import { OrderService } from '../order.service';
import { ProductService } from '../../product/product.service';

@Component({
  selector: 'app-cart',
  standalone: false,
  
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit{

  cart:any[]=[];

  constructor(private productService:ProductService){
    

  }

  ngOnInit(): void {
    this.cart=this.productService.cart;
  }

  incr(id:number){
    this.productService.cartIncr(id);
  }

  decr(id:number){
    this.productService.cartDecr(id);
  }




  



}
