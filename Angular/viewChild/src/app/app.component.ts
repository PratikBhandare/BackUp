import { Component, viewChild } from '@angular/core';
import { ChildComponent } from './child/child.component';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  @ViewChild(ChildComponent)
  childComponent!:ChildComponent;
  title = 'viewChild';

  loadchild(){
    this.childComponent.heyChild();

  }
  
}
