import { Component } from '@angular/core';
import { WelcomeService } from '../welcome.service';

@Component({
  selector: 'app-welcome',
  imports: [],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})
export class WelcomeComponent {
  message:String;
  constructor(welcomeService:WelcomeService){
    this.message=welcomeService.greet()
  }
}
