import { Component } from '@angular/core';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-sample',
  standalone: false,
  
  templateUrl: './sample.component.html',
  styleUrl: './sample.component.css'
})
export class SampleComponent {
  constructor(private globalService:UserServiceService){
    this.globalService.hello();
  }
}
