import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SettingsComponent } from './settings/settings.component';
import { UserComponent } from './user/user.component';
import { AuthguardService } from './authguard.service';
import { RegformComponent } from './registration/regform/regform.component';
import { FormGuardService } from './registration/form-guard.service';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"home",component:HomeComponent},
  {path:"setting",component:SettingsComponent,canActivate:[AuthguardService]},
  {path:"user",component:UserComponent},
  {path:"registration",component:RegformComponent,canDeactivate:[FormGuardService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
