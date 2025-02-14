import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router:Router) { }
  isLogged!:boolean;
  isAdmin!: boolean;
  isManager!:boolean;
  loggedUser:any;


  
  

  users:any[]=[
    {name:"Pratik",email:"pratik@gmail.com",password:"123",role:"Admin"},
    {name:"Anish",email:"anish@gmail.com",password:"1234",role:"Manager"},
  
  ]

  // logIn(user:any){
  //   this.isLogged=true;
    
  // }
  getLoggedUser(User:any){
    this.loggedUser=User;
    console.log("from auth service logged user",this.loggedUser);
    return this.loggedUser;
  }

  logIn(User:any) {
    // this.userService.logIn()
    console.log(User)
    

    let validFlag: boolean = false;
    for (let i = 0; i < this.users.length; i++) {
      if (this.users[i].email === User.email && this.users[i].password === User.password) {
        // this.userService.logIn();
        this.isLogged=true;
        alert("Login Succesful !!");
        validFlag = true;
        // this.LogInForm.reset();
        if (this.users[i].role === "Admin") {
          this.isAdmin = true;
        } else if (this.users[i].role === "Manager") {
          this.isManager = true;
        }
        this.router.navigate(["product/productlist"]);


      }
    }
    if (validFlag === false) {
      alert("Login Failed !!")
    }
    console.log(this.users);

  }

  logOut(){
    this.isLogged=false;
    
    this.isAdmin=false;
 
  }

}
