import { Injectable } from '@angular/core';
import { ProductService } from './product.service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartSubject=new BehaviorSubject<any[]>([]);
  cart$ = this.cartSubject.asObservable();

  cart:any[]=[];

  constructor(private productService:ProductService) {

  }

  addToCart(id:number){
    for(let i=0;i<this.productService.products.length;i++){
      if(id===this.productService.products[i].id){
        this.cart.push(this.productService.products[i])
      }
    }

    
      this.cartSubject.next(this.cart);

  }

  removeFromCart(id:number){
    this.cart=this.cart.filter(x=>x.id!==id);
    this.cartSubject.next(this.cart);

  }

  removeAll(){
    this.cart=[]
    this.cartSubject.next(this.cart)
  }


}
