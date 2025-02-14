// import { Injectable } from '@angular/core';
// import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, RouterStateSnapshot } from '@angular/router';
// import { UserService } from '../user/user.service';

// @Injectable({
//   providedIn:"root"
// })
// export class RoleGuard implements CanActivate{
//   constructor(private UserService:UserService){

//   }
//   canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean{

//     if(this.UserService.isAdmin===true){
//       return true;
//     }else{
//       alert("You dont have Admin Acces !!")
//       return false;
//     }
    
//   }

// }
