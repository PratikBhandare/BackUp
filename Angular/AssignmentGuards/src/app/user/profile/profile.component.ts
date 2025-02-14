import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  standalone: false,
  
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  person:any;
  constructor(private authservice:AuthService, private userService:UserService, private router:Router){
    this.authservice.loggedUser$.subscribe(val=>{
      this.person=val;
    })
  }

  

  logOut(){
    this.authservice.logOut();
    this.router.navigate(["/product/productlist"])
  }
  


}
