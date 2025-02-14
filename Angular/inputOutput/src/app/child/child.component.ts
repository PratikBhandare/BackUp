import { Component, EventEmitter, Input, Output, output } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: false,
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {

  @Input() inputValue!:string;

  @Output() changedValue=new EventEmitter<string>();

  change(){
    return this.changedValue.emit("Hii");
  }
}
