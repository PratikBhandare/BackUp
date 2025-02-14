import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';
import { Role } from './role.enum';

export class AdminGuard implements CanActivate{
  constructor(private authService : AuthService, private router : Router){}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const role = this.authService.getCurrentUserRole();
    if(role && role === Role.Admin){
      return true;
    }
    this.router.navigate(['/']);
    return false;
  }
}