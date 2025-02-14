import { Component } from '@angular/core';
import { observable, Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Observables';
  subject=new Subject<number>;

  constructor(){
    let a;
    this.subject.subscribe((value:number)=>{console.log("SUbscriber 1:",value)
      a=value;

    });
    this.subject.subscribe((value:number)=>{console.log("SUbscriber 2:",value)
      a=value
    });
    this.subject.next(1);
    console.log(a);
    this.subject.next(2);
    console.log(a);

  }

  // obs=new Subject<string>();
  // s:string='Hii';



  


  // disply(){
  //   this.obs.subscribe(value=>this.s=value)
  
    
  // }
  
  // change(){
  //   this.obs.next("Pratik !!")

  // }


  orderObservable=new Observable<string>;

  subscription:any;
  status:string='';

  customerObserver={
    // next:(status:string)=>console.log("Order Status :",status),
    next:(status:string)=>{this.status+=status+" "},

    error:(err:any)=>console.log("Error",err),
    complete:()=>console.log("Order tracking completed ")
    
  }

  ngOnInit(){
    this.orderObservable=new Observable(observer=>{
      observer.next("Order Placed");
      setTimeout(()=>observer.next("Shipped"),2000);
      setTimeout(()=>observer.next("Out For Delivery"),3000);
      setTimeout(()=>observer.next("Delivered"),4000);
    })

    this.subscription=this.orderObservable.subscribe(this.customerObserver);
    setTimeout(()=>this.subscription=this.orderObservable.subscribe(this.customerObserver),3000)

    setTimeout(()=>{
      this.subscription.unsubscribe();
      console.log("Unsubscribed");
      
    },6000)



    
  }
 




}
