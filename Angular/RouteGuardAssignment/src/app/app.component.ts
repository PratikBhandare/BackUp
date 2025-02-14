import { Component } from '@angular/core';
import { Event, NavigationCancel, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'RouteGuardAssignment';
  constructor(private router:Router){
    this.router.events.subscribe((event:Event)=>{
      if(event instanceof NavigationCancel){
        console.log("Navigation Cancelled !! ")
      }
    })

  }
}
