import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyComponent } from './lazy.component';



@NgModule({
  declarations: [
    LazyComponent
  ],
  imports: [
    CommonModule
  ]
})
export class LazyModule { 
  constructor(){
    console.log("Lazy Module Imported !!")
  }
}
