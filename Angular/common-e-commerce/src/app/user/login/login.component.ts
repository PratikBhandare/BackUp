import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-login',
  standalone: false,
  
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm = new FormGroup({
    email : new FormControl('', Validators.required),
    password : new FormControl('', Validators.required),
  });

  constructor(private authService : AuthService,private router : Router){}

  submit(){
    if(this.loginForm.valid){
      this.authService.logIn(this.loginForm.value.email!, this.loginForm.value.password!)
      this.router.navigate(['product/list'])
    }
    else{
      alert('Login failed!!')
    }
  }
}
