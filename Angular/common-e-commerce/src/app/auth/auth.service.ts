import { Injectable } from '@angular/core';
import { Role } from './role.enum';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor() { }

  logIn(email : string, password : string){
    localStorage.setItem('currentUser', JSON.stringify({email : email, password : password, role : Role.Customer}));
  }
  getCurrentUserRole(){
    let currentUser = JSON.parse(localStorage.getItem('currentUser')!);
    return currentUser ? currentUser.role : false;
  }
}
