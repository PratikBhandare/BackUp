import { Injectable, OnInit } from '@angular/core';
import { OrderService } from '../order/order.service';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { ComponentFixture } from '@angular/core/testing';


interface cart{
  [key:string]:any[]
}
@Injectable({
  providedIn: 'root'
})
export class ProductService implements OnInit {

  loggedUser!:any;
  isLogged!:boolean;

  constructor(private authservice:AuthService,private router:Router) {
    this.authservice.loggedUser$.subscribe(val=>{
      this.loggedUser=val;
    })
    this.authservice.isLogged$.subscribe(val=>{
      this.isLogged=val;
    })
   }

  products:any[]=[
    {name:"P1",price:10000,id:1,img:"https://th.bing.com/th/id/OIP.y1b8GoVTsvQtUlhM0Y9XFQHaEf?rs=1&pid=ImgDetMain"},
    {name:"P2",price:10000,id:2,img:"https://th.bing.com/th/id/OIP.y1b8GoVTsvQtUlhM0Y9XFQHaEf?rs=1&pid=ImgDetMain"},
    {name:"P3",price:10000,id:3,img:"https://th.bing.com/th/id/OIP.y1b8GoVTsvQtUlhM0Y9XFQHaEf?rs=1&pid=ImgDetMain"},
  ];
  cart:any[]=[];
  cartSubject=new BehaviorSubject<any[]>([]);
  cart$=this.cartSubject.asObservable();
  

  _cart:cart={};

  cartsSubject=new BehaviorSubject<{}>({})
  
  addProduct(product:any){
    this.products.push(product);
    console.log(this.products);
  }

  addToCart(id:number){


    if(this.authservice.isLogged){
      for(let i=0;i<this.products.length;i++){
        if(id===this.products[i].id){
          for(let j=0;j<this.cart.length;j++){
            if(this.products[i].id===this.cart[j].id){
              if(confirm("Do you want To add Again?")){
              this.cart[j].quantity++;
              this.cartSubject.next(this.cart);
              // this._cart[this.loggedUser.email]=[this.cart];
              this.cartsSubject.next(this._cart);
              console.log(this._cart);


              // alert("Alredy Added !!")
              return;

              }else{
                return;
              }
              
  
            }
          }
          this._cart[this.loggedUser.email]=[this.cart];
          console.log(this._cart);
          this.cartsSubject.next(this._cart);
          
          this.cart.push({...this.products[i],quantity:1});
          this.cartSubject.next(this.cart);

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

  ngOnInit(): void {
    this.cart=[]
    this.cartSubject.next(this.cart)
  }

}
