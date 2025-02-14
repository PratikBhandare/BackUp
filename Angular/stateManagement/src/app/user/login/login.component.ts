import { Component } from '@angular/core';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  name:string="Pratik";
  inp:string="";
  
    isLogged!:boolean;
    loggedUser:string[]=[];
  
    constructor(private authService:AuthService){
  
      this.authService.isLogged$.subscribe(val=>{this.isLogged=val});
      this.authService.user$.subscribe(val=>{this.loggedUser.push(val)});
      console.log(this.isLogged);
      
    }
  
    login(name:string){
      this.authService.login(name);
      console.log(this.loggedUser)
    }
    
    logout(){
      this.authService.logout();
    }

}
