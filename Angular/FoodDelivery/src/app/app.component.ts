import { Component } from '@angular/core';
import { FoodListComponent } from './food-list/food-list.component';
import { CartComponent } from './cart/cart.component';


@Component({
  selector: 'app-root',
  imports: [FoodListComponent,CartComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'FoodDelivery';
}
