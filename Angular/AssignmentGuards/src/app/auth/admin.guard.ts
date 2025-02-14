import { Inject, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn:"root"
})
export class AdminGUard implements CanActivate{
  constructor(private Authservice:AuthService, private router:Router){

  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if(!this.Authservice.isLogged){
      alert("You need to Login First !!")
      this.router.navigate(["user/login"])
      return false
    }

    if(this.Authservice.isAdmin===true){
      return true;
    }else{
      alert("You dont have Admin Acces !!")
      return false;
    }
    
  }
}