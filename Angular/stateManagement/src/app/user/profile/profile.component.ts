import { Component } from '@angular/core';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-profile',
  standalone: false,
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  isLogged!:boolean;
  loggedUser!:string|null;

  constructor(private authService:AuthService){
    this.authService.user$.subscribe(val=>{
      this.loggedUser=val;
    })
    this.authService.isLogged$.subscribe(val=>{
      this.isLogged=val;
    })

  }

}
