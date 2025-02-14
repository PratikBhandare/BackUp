import { Injectable } from '@angular/core';
import { OrderService } from '../order/order.service';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private authservice:AuthService,private router:Router) { }

  products:any[]=[
    {name:"P1",price:10000,id:1,img:"https://th.bing.com/th/id/OIP.y1b8GoVTsvQtUlhM0Y9XFQHaEf?rs=1&pid=ImgDetMain"},
    {name:"P2",price:10000,id:2,img:"https://th.bing.com/th/id/OIP.y1b8GoVTsvQtUlhM0Y9XFQHaEf?rs=1&pid=ImgDetMain"},
    {name:"P3",price:10000,id:3,img:"https://th.bing.com/th/id/OIP.y1b8GoVTsvQtUlhM0Y9XFQHaEf?rs=1&pid=ImgDetMain"},
  ];
  cart:any[]=[];

  carts:Record<string,any[]>={}
  
  addProduct(product:any){
    this.products.push(product);
    console.log(this.products);
  }

  // addToCart(id:number,userEmail:string){

  //   if(this.authservice.isLogged){
  //     for(let i=0;i<this.products.length;i++){
  //       if(id===this.products[i].id){
  //         for(let j=0;j<this.cart.length;j++){
  //           if(this.products[i].id===this.cart[j].id){
  //             this.cart[j].quantity++;
  //             // alert("Alredy Added !!")
  //             return;
  
  //           }
  //         }
  //         this.carts[userEmail].push({...this.products[i],quantity:1});
  //         // this.carts[userEmail]=[{...this.products[i],quantity:1}];
  //         console.log(this.carts);
  //         this.cart.push({...this.products[i],quantity:1});
  //         alert("Added Succesfully !!")
  //       }
  //     }
      
  //     console.log(this.cart);
  //   }else{
  //     alert("you need to log in First !!");
  //     this.router.navigate(["/login"])
  //   }
  // }

  addToCart(id:number){

    if(this.authservice.isLogged){
      for(let i=0;i<this.products.length;i++){
        if(id===this.products[i].id){
          for(let j=0;j<this.cart.length;j++){
            if(this.products[i].id===this.cart[j].id){
              this.cart[j].quantity++;
              // alert("Alredy Added !!")
              return;
  
            }
          }
          this.cart.push({...this.products[i],quantity:1});
          alert("Added Succesfully !!")
        }
      }
      
      console.log(this.cart);
    }else{
      alert("you need to log in First !!");
      this.router.navigate(["/login"])
    }
  }

  cartIncr(id:number){
    for(let i=0;i<this.cart.length;i++){
      if(id===this.cart[i].id){
        
        this.cart[i].quantity++;
      }
    }
  }

  cartDecr(id:number){
    for(let i=0;i<this.cart.length;i++){
      if(id===this.cart[i].id){
        if(this.cart[i].quantity==0){
          return;
        }
        this.cart[i].quantity--;
      }
    }
  }

}
