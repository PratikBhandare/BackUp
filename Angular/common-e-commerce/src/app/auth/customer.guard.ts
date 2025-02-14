import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';
import { Role } from './role.enum';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerGuard implements CanActivate{
  constructor(private authService : AuthService, private router : Router){}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const role = this.authService.getCurrentUserRole();
    
    if(role && role !== Role.Manager){
      return true;
    }
    this.router.navigate(['/user/un-authorized']);
    return false;
  }
}