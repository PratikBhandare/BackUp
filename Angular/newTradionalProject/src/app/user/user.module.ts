import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { RegistrationComponent } from './registration/registration.component';



@NgModule({
  declarations: [
    LoginComponent,
    ProfileComponent,
    RegistrationComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    LoginComponent,
    ProfileComponent,
    RegistrationComponent
  ]
})
export class UserModule {
  constructor(){
    console.log("User Module Loaded !!");
  }
 }
