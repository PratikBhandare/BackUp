import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'stateManagement';
  name:string="Pratik";

  isLogged!:boolean;
  loggedUser!:string|null;

  constructor(private authService:AuthService){

    this.authService.isLogged$.subscribe(val=>{this.isLogged=val});
    this.authService.user$.subscribe(val=>{this.loggedUser=val});
    console.log(this.isLogged);
    
  }

  login(name:string){
    this.authService.login(name);
    // console.log(this.isLogged)
  }
  
  logout(){
    this.authService.logout();
  }
}
