import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm=new FormGroup({
    email:new FormControl("",Validators.required),
    password:new FormControl(''),

    
  })

  login(){
    if(this.loginForm.valid){
      console.log("Not valid form");
      
    }
    console.log(this.loginForm.value);
    
    console.log("Login Works !!");
    
  }
}
