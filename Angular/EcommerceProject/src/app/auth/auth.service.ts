import { Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Role } from './role';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // isLogged!:boolean;
  // role!:Role;

  constructor(private route:Router) { 
    localStorage.setItem("isLogged","false")

  }

  login(role:Role){
    localStorage.setItem("isLogged","true")
    localStorage.setItem("role",JSON.stringify(Role[role]));
  }
  


  userLogin(){
    localStorage.setItem("isLoggedIn","true")
  }



}
