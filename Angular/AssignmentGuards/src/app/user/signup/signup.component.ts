import { Component } from '@angular/core';
import { FormControl, FormGroup} from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-signup',
  standalone: false,
  
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  constructor(private UserService:AuthService,private router:Router){

  }

  SignUpForm=new FormGroup({
    name:new FormControl(''),
    email:new FormControl(''),
    password:new FormControl(''),
    role:new FormControl("Customer")

  })

  createUser(){
    console.log(this.SignUpForm.value);
    this.UserService.users.push(this.SignUpForm.value);
    console.log(this.UserService.users)
    this.router.navigate(["/login"])
  }

}


