import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'RatingSystem';
  rating:number=0;

  setRating(rate:number){
    this.rating=rate;

  }
}
