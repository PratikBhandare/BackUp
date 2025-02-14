import { Component } from '@angular/core';
import { AuthguardService } from '../authguard.service';

@Component({
  selector: 'app-home',
  standalone: false,
  
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(private AuthGuardService:AuthguardService){

  }
  isloggedIn(role:String):boolean{
    if(role==="Admin"){
      return true
    }else{
      return false;
    }
  }

}
