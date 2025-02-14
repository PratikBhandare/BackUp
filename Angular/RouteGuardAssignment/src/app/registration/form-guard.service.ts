import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot } from '@angular/router';
import { RegformComponent } from './regform/regform.component';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormGuardService implements CanDeactivate<RegformComponent>{

  constructor() { }

  canDeactivate(component:RegformComponent,
    route: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot,
    nextState: RouterStateSnapshot) : Observable<boolean> | Promise<boolean> | boolean {
      return component.canExit();
      // alert("you van not navigate !!")
      // return false;
    }

  




}
