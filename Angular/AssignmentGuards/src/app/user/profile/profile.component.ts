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
export class ProfileComponent implements OnInit{
  person:any;
  constructor(private authservice:AuthService, private userService:UserService, private router:Router){
    // this.person=this.userService.getProfile();
    // console.log("This is Logged Person !!\n",this.person)
  }

  ngOnInit(): void {
    this.person=this.userService.getProfile();
    console.log("Profile component This is Logged Person !!\n",this.person)
  }

  logOut(){
    this.authservice.logOut();
    this.router.navigate(["/product/productlist"])
  }
  


}
