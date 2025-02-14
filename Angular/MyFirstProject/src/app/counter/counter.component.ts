import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  value:number=0;

  increment():void{
    this.value++;
  }
  decrement(){
    this.value--;
  }

  
}
