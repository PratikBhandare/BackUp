import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';



@NgModule({
  declarations: [
    LoginComponent,
    DashboardComponent,
    ProfileComponent,
    EditProfileComponent,
    UserComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports:[
    LoginComponent,
    DashboardComponent,
    ProfileComponent,
    EditProfileComponent
  ]
})
export class UserModule { }
