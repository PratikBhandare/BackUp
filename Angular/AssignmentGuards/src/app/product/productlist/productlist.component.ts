import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { ProductService } from '../product.service';
import { OrderService } from '../../order/order.service';

@Component({
  selector: 'app-productlist',
  standalone: false,
  
  templateUrl: './productlist.component.html',
  styleUrl: './productlist.component.css'
})
export class ProductlistComponent implements OnInit,OnChanges{
  constructor(private authService:AuthService, private productService:ProductService,private orderService:OrderService){
    this.authService.loggedUser$.subscribe(val=>{
      this.loggedUser=val;
    })
    

  }
  loggedUser!:any;
  pdetails:boolean=false;
  products:any[]=[];
  filteredProducts:any[]=[];
  search:any;

  ngOnInit(): void {
    this.pdetails=this.authService.isAdmin;
    this.products=this.productService.products;
    console.log("productlist onit");
    // this.loggedUserEmail=this.authService.loggedUser.email;
    
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("Changes Detected")
    if(changes['data']){
      console.log(changes['data'].previousValue);
      console.log(changes['data'].currentValue);
    }
  }

  addToCart(id:number){
    this.productService.addToCart(id);
    console.log(this.orderService.cart)
  }
  
  

  

}
