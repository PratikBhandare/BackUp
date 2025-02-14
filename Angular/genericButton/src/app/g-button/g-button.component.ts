import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-g-button',
  standalone: false,
  templateUrl: './g-button.component.html',
  styleUrl: './g-button.component.css'
})
export class GButtonComponent {
  @Input() label!:string;
  @Input() color!:string;
  @Output() Onclick=new EventEmitter();

  btnclick(event:any){
    this.Onclick.emit(event);
  }

}
