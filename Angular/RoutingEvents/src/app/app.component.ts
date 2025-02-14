import { Component } from '@angular/core';
import { NavigationEnd, NavigationStart, Route, Router } from '@angular/router';
import { Event } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'RoutingEvents';
  constructor(private route:Router){
    this.route.events.subscribe((event:Event)=>{
      if(event instanceof NavigationStart){

        console.log("Event Started")
        console.log(event)
      }
      else if(event instanceof NavigationEnd){
        console.log("Event Ended")
        console.log(event)
      }

    })

  }
}
