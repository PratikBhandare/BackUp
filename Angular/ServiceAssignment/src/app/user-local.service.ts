import { Injectable } from '@angular/core';

@Injectable()
export class UserLocalService {

  constructor() { }
  hello(){
    console.log("Hello From Local Service !!")
  }
}
