import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { ProfileComponent } from "./profile/profile.component";
import { CustomerGuard } from "../auth/customer.guard";
import { UnAuthorizedComponent } from "./un-authorized/un-authorized.component";

let routes : Routes = [
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'profile', canActivate: [CustomerGuard], component: ProfileComponent},
    {path: 'un-authorized', component: UnAuthorizedComponent},
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UserRouting{}