import { Component } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  standalone: false,
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  cart:any[]=[];
  constructor(private cartService:CartService){
    this.cartService.cart$.subscribe(val=>{
      this.cart=val;
    })
  }

  removeFromCart(id:number){
    this.cartService.removeFromCart(id);
  }

  removeAll(){
    this.cartService.removeAll();
  }

}
