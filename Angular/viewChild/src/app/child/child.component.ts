import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: false,
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {

  // @ViewChild(ChildComponent)childComponent!:ChildComponent;
  constructor(){
    console.log("child Loaded!!")
  }

  heyChild(){
    console.log("Hey From Child !!");
  }

}
