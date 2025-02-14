import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { UserComponent } from './user/user.component';
import { SettingsComponent } from './settings/settings.component';
import { AuthguardService } from './authguard.service';
import { RegistrationModule } from './registration/registration.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ReactiveFormsModules } from './reactive-forms/reactive-forms.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfileComponent,
    UserComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RegistrationModule,
    ReactiveFormsModules

],
  providers: [AuthguardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
