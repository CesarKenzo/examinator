import { Component, inject, OnInit } from '@angular/core';
import { MatSnackBar, MatSnackBarRef } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { User } from '../model/user';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  durationInSeconds = 3;

  login: User = {
    id: 0,
    name: '',
    username: '',
    password: '',
    profile: '',
    description: '',
    email: '',
    flAdmin: false
  }

  userList: User[] = [];

  constructor(
    private userService: UserService,
    private router: Router,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.listUsers(); 
  }

  userLogin() {
    let flUser = false
    for(var x = 0; x < this.userList.length; x++) {
      let e = this.userList[x]
      if(this.login.username != null && this.login.username.length != 0) {
        if(e.username == this.login.username && e.password == this.login.password) {
          this.userService.usuarioLogado = e;
          flUser = true
          break
        } 
      }
    }

    if(flUser) {
      this.router.navigate(['/home'])
    } else {
      this.router.navigate(['/login'])
      this.openSnackBar()
    }
  }

  openSnackBar() {
    this._snackBar.openFromComponent(LoginResponseComponent, {
      duration: this.durationInSeconds * 1000,
    });
  }

  listUsers() {
    this.userService.list().subscribe((userList) => {
      this.userList = userList
    }) 
  }
}

@Component({
  selector: 'login-response',
  templateUrl: 'login-response.html',
  styles: [
    `
    :host {
      display: flex;
    }

    .login-resp {
      color: white;
    }
  `,
  ],
})
export class LoginResponseComponent {
  snackBarRef = inject(MatSnackBarRef);
}
