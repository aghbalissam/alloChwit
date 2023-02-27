import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthentificationService } from './services/authentification.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  constructor (private router: Router, 
              private authSrv : AuthentificationService) {}
  
  canActivate(): boolean
  {
    if(this.authSrv.loggedIn())
      return true;
    else
      return false;
  }
  
}
