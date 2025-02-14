import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRouting } from './user-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UnAuthorizedComponent } from './un-authorized/un-authorized.component';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    UnAuthorizedComponent
  ],
  imports: [
    CommonModule,
    UserRouting,
    ReactiveFormsModule
  ]
})
export class UserModule { }
