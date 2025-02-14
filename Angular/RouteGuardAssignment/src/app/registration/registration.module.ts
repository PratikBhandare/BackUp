import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegformComponent } from './regform/regform.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    RegformComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    RegformComponent
  ]
})
export class RegistrationModule { }
