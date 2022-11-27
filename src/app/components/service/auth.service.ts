import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { loggedUserKey } from 'src/app/global-variable';

import { User } from '../model/user';


@Injectable({
  providedIn: 'root'
})
export class AuthService{

  constructor(private router: Router) { }

  public loginResponse?: User;

  public clear(): void {
    this.loginResponse = undefined;
  }

  public isAuthenticated(): boolean {  
    return (sessionStorage.getItem(loggedUserKey) != null) 
   
    /*
    if(sessionStorage.getItem(loggedUserKey) == null && sessionStorage.getItem(loggedUserKey) == '0') {
      this.router.navigate(['/live-list'])
    }
    */
  }

}