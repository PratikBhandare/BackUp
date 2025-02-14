import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'inputOutput';

  value:string="Hello";

  getHello(event:string){
    this.value=event;
  }


}
