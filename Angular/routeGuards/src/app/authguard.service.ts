import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanDeactivate, MaybeAsync, Resolve, ResolveEnd, RouterStateSnapshot } from '@angular/router';
import { LoginComponent } from './login/login.component';

@Injectable({
  providedIn: 'root'
})
export class AuthguardService implements CanActivate, Resolve<String>, CanDeactivate<LoginComponent> {

  constructor() { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const user = localStorage.getItem("Role");
    console.log(user)
    if (user === "Admin") {
      return true;
    }
    else {
      alert("Sorry you can not have acces !!");
      return false;
    }
  }

  resolve(route: ActivatedRouteSnapshot,state: RouterStateSnapshot): String {
    console.log("Resolve called !!")
    return "Resolved !"
  }

  canDeactivate(component:LoginComponent,route:ActivatedRouteSnapshot):boolean{
    console.log("trying to navigate !!")
    return component.canExit();
  }


}
