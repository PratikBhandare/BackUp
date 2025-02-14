import { Injectable } from '@angular/core';
import { Console } from 'node:console';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }
  hello(){
    console.log("Hello From Global Service !!")
  }
}
