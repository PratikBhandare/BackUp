import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  users=[
    {name:"pratik",role:"Developer"},
    {name:"anish",role:"Developer"},
  ]



  user = new BehaviorSubject<string|any>("");
  private isLoggedSubject = new BehaviorSubject<boolean>(false);

  user$=this.user.asObservable();

  isLogged$=this.isLoggedSubject.asObservable();
  
  login(username:string){
    this.user.next(username);
    this.isLoggedSubject.next(true);
    localStorage.setItem("User",username);
  
  }

  logout(){
    this.user.next("");
    this.isLoggedSubject.next(false);
    localStorage.removeItem("User");
    localStorage.setItem("isLogged",`${this.isLogged$}`);

  }
}
