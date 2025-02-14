import { Component, OnDestroy } from '@angular/core';
import { interval, map, Subject, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent implements OnDestroy {
  title = 'stockSubscription';

  private stockPrice=new Subject<number>();

  private subscription:Subscription|undefined;


  latestPrice:number|null|undefined;
  subscribers:number=0;
  subs:any[]=[]
  
  constructor(){

    interval(2000).pipe(map(()=>(Math.random()*100).toFixed(2))).subscribe(price=>{
      this.stockPrice.next(parseFloat(price));
    })
    
  }

  subscribeToStockPrice(){
    this.subscription=this.stockPrice.subscribe(price=>{
      this.latestPrice=price;
      console.log("Received")
    })
    this.subscribers++;
    this.subs.push(1);
  }

  unSubscribe(){
    this.subscription?.unsubscribe();
    console.log("unsubscribed");
    this.subscribers--;

  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }


}
