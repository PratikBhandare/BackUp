import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, Route, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn:"root"
})
export class AdminGuard implements CanActivate{
  constructor(private authService:AuthService,private router:Router ){

  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):boolean{
    const value=localStorage.getItem("isLogged");

    if(value==="false"){
      return false;
    }
    const role=localStorage.getItem("role");
    if(role==="Admin"){
      return true;
    }
    this.router.navigate(['/']);
    return false;
  }

}
