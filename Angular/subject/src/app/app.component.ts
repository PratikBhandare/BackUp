import { Component } from '@angular/core';
import { BehaviorSubject, Observable, observable, of, Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'subject';

  subject=new BehaviorSubject<number>(0);

  // myObservable=new Observable(observer=>{
  //   observer.next(1)
  //   observer.next(2)
  //   observer.next(3)
  //   observer.next(4)
  // });



  constructor(){
    this.subject.next(1);
    this.subject.next(2);
    this.subject.next(3);
    this.subject.subscribe((value:number)=>console.log(value));
    this.subject.next(4);

    of(1,2,3,4).subscribe((value:number)=>console.log(value))

    // this.myObservable.subscribe(val=>console.log(val))



  }
}
