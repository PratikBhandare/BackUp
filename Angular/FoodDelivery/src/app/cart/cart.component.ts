import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { FoodItem } from '../food-item';

@Component({
  selector: 'app-cart',
  imports: [],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  cartList:Array<FoodItem>;
  total:number;
  constructor(private myCartService:CartService){
    this.cartList=this.myCartService.getCartItems();
    
    console.log("Cart:", this.cartList);
    
    this.total=this.myCartService.getCartTotal();
  }
  n="String";

  removeFromCart(id:number){
    this.cartList=this.cartList.filter(x=>x.id!==id)
    
    
  }


}
