import { Component } from '@angular/core';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  isLogged!:boolean;
  loggedUser!:string|null;

  constructor(private authService:AuthService){

    this.authService.user$.subscribe(val=>{
      this.loggedUser=val;
    })


  }

}
