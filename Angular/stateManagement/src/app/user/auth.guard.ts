import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, GuardResult, MaybeAsync, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn:"root"
})
export class AuthGuard implements CanActivate{
  isLogged!:boolean;
  constructor(private authService:AuthService){
    this.authService.isLogged$.subscribe(val=>{
      this.isLogged=val;
    })

  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean{
    if(this.isLogged){
      return true;
    }else{
      alert("Login First !!")
      return false;
    }
    
    
  }
}
