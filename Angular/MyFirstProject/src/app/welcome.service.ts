import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WelcomeService {

  constructor() { }

  greet():String{
    return "Welcome Service !!"
  }
}
