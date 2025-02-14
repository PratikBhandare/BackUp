import { Component, OnInit } from '@angular/core';
import { OrderService } from '../order.service';
import { ProductService } from '../../product/product.service';

@Component({
  selector: 'app-cart',
  standalone: false,
  
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent{

  cart:any[]=[];

  constructor(private productService:ProductService){
    this.productService.cart$.subscribe(val=>{
      this.cart=val;
    })
    

  }

  incr(id:number){
    this.productService.cartIncr(id);
  }

  decr(id:number){
    this.productService.cartDecr(id);
  }




  



}
