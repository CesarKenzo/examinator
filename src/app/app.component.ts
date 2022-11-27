import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { flLogged, loggedUserKey, loggedUserLevelKey } from './global-variable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  showFiller = false;
  Admin = false;
  Logado : boolean = false; 
  title = 'Exam-inator';

  constructor(
    private router: Router
  ) { 
    this.Logado = sessionStorage.getItem(loggedUserKey) == null ? false:true
  }

  ngOnInit(): void {
    if(sessionStorage.getItem(loggedUserKey) == null){
      this.Logado = false 
      this.Admin = false
    } else {
      this.Logado = true
      if(sessionStorage.getItem(loggedUserLevelKey) == 'Administrador') {
        this.Admin = true
      } else {
        this.Admin = false
      }
    }
  }

  logoff() {
    sessionStorage.removeItem(loggedUserKey)
    sessionStorage.removeItem(loggedUserLevelKey)
    this.router.navigate(['/live-list'])
  }
}
