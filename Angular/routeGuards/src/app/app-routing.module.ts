import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthguardService } from './authguard.service';

const routes: Routes = [
  {path:"login",component:LoginComponent,canDeactivate:[AuthguardService]},
  {path:"dashboard",component:DashboardComponent,canActivate:[AuthguardService],resolve:{resolveData:AuthguardService}},
  // {path:"",redirectTo:"/",pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
