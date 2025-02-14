import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn:"root"
})
export class CustomerGuard implements CanActivate{
  constructor(private Authservice:AuthService, private router:Router){

  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if(!this.Authservice.isLogged){
      alert("You Need To Login First !!")
      this.router.navigate(["user/login"])
      return false
    }else{
      return true;
    }
    
  }
}
