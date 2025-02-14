import { Component } from '@angular/core';
import { UserServiceService } from './user-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'newTradionalProject';
  msg="Hello I am Parent";

  fun(){
    console.log("Hello From Parent Function")
  }
  constructor(private globalService:UserServiceService){
    this.globalService.hello();
  }
}
