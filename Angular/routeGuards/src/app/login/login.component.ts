import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-login',
  standalone: false,
  
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  form=new FormGroup({
    name:new FormControl(""),
    email:new FormControl(""),
  })

  constructor(){
    localStorage.setItem("Role","Admin");

  }
  title="Hii"
  changeTitle(){
    this.title="CHanged"
    
  }

  canExit(){
    if(confirm("are you sure !!")){
      return true;
    }
    else{
      return false;
    }
  
  }

}
