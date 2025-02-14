import { Component } from '@angular/core';
import { observable, Observable, Subscription } from 'rxjs';
import { observeNotification } from 'rxjs/internal/Notification';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'stockPrice';

  stockPrice:number|undefined;

  fetchStockPrice():Subscription{
    return this.getStockPrice().subscribe(price => {
      this.stockPrice = price;
      console.log(`New Stock Price is : ${this.stockPrice}`);
    });
  }

  getStockPrice():Observable<number>{
    return new Observable(observer=>{
      const price = (Math.random()*100).toFixed(2);

      observer.next(parseFloat(price));
      observer.complete();
    })
  }

  unSubsccribe(){
    this.fetchStockPrice().unsubscribe();
  }
}
