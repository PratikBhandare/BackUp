import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { RouterModule, Routes } from '@angular/router';
import { OrderRoutingModule } from '../order/order-routing.module';
import { ProductRoutingModule } from '../product/product-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UserModule } from './user.module';
import { CustomerGuard } from '../auth/customer.guard';


const routes:Routes=[
  {path:"user/login",component:LoginComponent},
  {path:"login",component:LoginComponent},
  {path:"signup",component:SignupComponent},
  {path:"user/profile",component:ProfileComponent,canActivate:[CustomerGuard]},
];



@NgModule({
  declarations: [

    
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    
  ],
  exports:[
    RouterModule
  ]
})
export class UserRoutingModule {
  constructor(){
    console.log("USer Module Imported !!")
  }
 }
