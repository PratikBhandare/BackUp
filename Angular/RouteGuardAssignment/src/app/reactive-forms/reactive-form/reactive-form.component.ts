import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  standalone: false,
  
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css'
})
export class ReactiveFormComponent {

  MyForm=new FormGroup({
    name:new FormControl(""),
    email:new FormControl(""),
    role:new FormControl(""),
  })

  onsubmit(){
    console.log(this.MyForm.value);
    this.MyForm.reset();
  }

}
