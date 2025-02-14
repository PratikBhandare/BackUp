import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { FoodItem } from '../food-item';

@Component({
  selector: 'app-food-list',
  imports: [],
  templateUrl: './food-list.component.html',
  styleUrl: './food-list.component.css'
})
export class FoodListComponent {

  foodList:Array<FoodItem>;
  

  
  constructor(private cartService:CartService){
    

    this.foodList=this.cartService.foodList;
    console.log("hii")
    
  }

  addToCart(id:number):void{
    this.cartService.addToCart(id);

  }

  
  

}
