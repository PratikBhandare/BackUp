import { Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserService  {

  person:any;
  

  constructor(private Authservice:AuthService) {
    
   }

   getProfile(){
    this.person=this.Authservice.loggedUser;
    let personData:any;
    console.log(this.Authservice.users);
    
    for(let i=0;i<this.Authservice.users.length;i++){
      if(this.person.email===this.Authservice.users[i].email && this.person.password===this.Authservice.users[i].password){
        personData=this.Authservice.users[i];
        console.log(this.Authservice.users);
        
        console.log("PErsonData:",personData)
      }
    }
    return personData;
   }


  
}
