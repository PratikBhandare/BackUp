import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn:"root"
})
export class ManagerGuard implements CanActivate{
  constructor(private Authservice:AuthService, private router:Router){

  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if(!this.Authservice.isLogged){
      this.router.navigate(["user/login"])
      return false
    }

    if(this.Authservice.isManager===true || this.Authservice.isAdmin===true){
      return true;
    }else{
      alert("You dont have Manager Or Admin Acces !!")
      return false;
    }
    
  }
}