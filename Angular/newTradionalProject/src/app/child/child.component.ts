import { Component, Input } from '@angular/core';
import { NONAME } from 'dns';
import { DebugLoggerFunction } from 'util';

@Component({
  selector: 'app-child',
  standalone: false,
  
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {

  @Input() child:String="";
  @Input() msg:String="";

  @Input() obj:{name:String,id:String}={name:"",id:""};

  @Input()  HelloFromParent!:()=>void;

  method(){
    this.HelloFromParent();
  }
  constructor(){
    console.log("Chld is Here");
    // this.method();


  }  

}
