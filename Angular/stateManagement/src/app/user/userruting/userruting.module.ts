import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  RouterModule, Routes } from '@angular/router';
import { UserComponent } from '../user/user.component';
import { AuthGuard } from '../auth.guard';


const routes:Routes=[
  {path:"search/:name",component:UserComponent,canActivate:[AuthGuard]}
]
@NgModule({
  declarations: [
   
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class UserrutingModule { }
