import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn:"root"
})
export class ManagerGuard implements CanActivate{
  constructor(private authService:AuthService, private router:Router){

  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):boolean{
    const value = localStorage.getItem("isLogged");
    if(value==="false"){
      this.router.navigate(["/"]);
      return false;
    }

    const role = localStorage.getItem("role");

    if(role!=="Customer"){
      return true;
    }

    this.router.navigate(["/"])
    return false;
  }

}