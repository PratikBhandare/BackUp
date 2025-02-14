import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-regform',
  standalone: false,
  
  templateUrl: './regform.component.html',
  styleUrl: './regform.component.css'
})


export class RegformComponent {
  
  constructor(private router:Router){
    

  }
  
  
  ;
  users:user[]=[]
  // UserName='';
  
  
  

  onSubmit(form:any){
    let user:user = {name:"",email:"",role:""};
    
    user.name=form.value.UserName;
    user.email=form.value.Email;
    user.role=form.value.Role;
    this.users.push(user);
    console.log(this.users);

    form.reset();    

  }

  canExit() : boolean {
 
    if (confirm("Do you wish to Please confirm")) {
        return true
      } else {
        return false
      }
    }
  

}

interface user{
  name:string,
  email:string,
  role:string
    
}
