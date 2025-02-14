import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router:Router) { }
  isLogged!:boolean;
  isLoggedSubject=new BehaviorSubject<boolean>(false);
  isLogged$=this.isLoggedSubject.asObservable();
  isAdmin!: boolean;
  isManager!:boolean;
  loggedUserSubject=new BehaviorSubject<{}>({});
  loggedUser$=this.loggedUserSubject.asObservable();


  
  

  users:any[]=[
    {name:"Pratik",email:"pratik@gmail.com",password:"123",role:"Admin"},
    {name:"Anish",email:"anish@gmail.com",password:"1234",role:"Manager"},
  
  ]


  logIn(User:any) {

    console.log(User);
    
    

    let validFlag: boolean = false;
    for (let i = 0; i < this.users.length; i++) {
      if (this.users[i].email === User.email && this.users[i].password === User.password) {

        this.isLogged=true;
        this.loggedUserSubject.next(this.users[i]);
        alert("Login Succesful !!");
        validFlag = true;

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
    this.isLoggedSubject.next(false)
    
    this.isAdmin=false;
 
  }

}
