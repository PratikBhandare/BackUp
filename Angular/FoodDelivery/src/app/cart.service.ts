import { Injectable } from '@angular/core';
import { FoodItem } from './food-item';

@Injectable({
  providedIn: 'root'
})


export class CartService {
  static getCartItems(): FoodItem[] {
    throw new Error('Method not implemented.');
  }

  foodList:Array<FoodItem>=new Array();
  cartList:Array<FoodItem>=new Array();

  constructor(){
    this.foodList=[{id:1,name:"Burger",price:10000},{id:2,name:"French Fries",price:250},{id:3,name:"Garlic Bread",price:300}]
  }
  

  getFoodItems():Array<FoodItem>{
    
    return this.foodList ;
  }

  addToCart(id:number){
    console.log(id);

    let f:Array<FoodItem> = this.foodList.filter(x=>x.id==id);

    console.log(f[0]);

    this.cartList.push(f[0])

    console.log("Added Food: ",this.cartList[this.cartList.length-1])
    
  }

  removeFoodItem(id:number){
    console.log(id)

    this.cartList=this.cartList.filter(x=>x.id !==id);

    console.log(this.cartList)

    return this.cartList;
  }

  getCartItems(){
    return this.cartList;
  }

  getCartTotal(){
    return this.cartList.reduce((acc,val)=>acc+val.price,0);

  }
}
