import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-user',
  standalone: false,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit{

  user:any;

  constructor(private router:ActivatedRoute,private authservice:AuthService){

  }
  
  ngOnInit(): void {
    this.user=this.router.snapshot.params["name"];
    console.log(this.user);
    for(let i=0;i<this.authservice.users.length;i++){
      if(this.user===this.authservice.users[i].name){
        this.authservice.user.next(this.authservice.users[i].name);
      }
    }
    
  }

  

}
