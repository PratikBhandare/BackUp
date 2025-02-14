import { Component, OnChanges, SimpleChanges } from '@angular/core';
// import { UserService } from '../user.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/auth.service';


@Component({
  selector: 'app-login',
  standalone: false,

  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private userService: AuthService, private router: Router) {

  }

  LogInForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),

  })

  

  getData(){
    let user={
      email:this.LogInForm.value.email,
      password:this.LogInForm.value.password
    }
    return user;

  }


  login(){
    let data=this.getData();
    this.userService.logIn(data);
  }

  

}
