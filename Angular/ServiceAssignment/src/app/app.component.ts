import { Component } from '@angular/core';
import { UserService } from './user.service';
import { UserLocalService } from './user-local.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ServiceAssignment';

  constructor(private GlobalService:UserService, private LocalService:UserLocalService){
    this.GlobalService.hello();
    this.LocalService.hello();


  }
}
