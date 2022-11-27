import { Component, inject, Input, OnInit } from '@angular/core';
import { MatSnackBar, MatSnackBarRef } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { User } from '../model/user';
import { UserService } from '../service/user.service';
import { flLogged, loggedUserKey, loggedUserLevelKey } from 'src/app/global-variable';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-live-list',
  templateUrl: './live-list.component.html',
  styleUrls: ['./live-list.component.css']
})
export class LiveListComponent implements OnInit {

  hide = true;
  userDesc = '';

  user: User = {
    id: 0,
    name: '',
    username: '',
    password: '',
    profile: '',
    description: '',
    email: '',
    userDesc: ''
  }
  
  durationInSeconds = 5;

  login: User = {
    id: 0,
    name: '',
    username: '',
    password: '',
    profile: '',
    description: '',
    email: '',
    userDesc: ''
  }

  userList: User[] = [];

  userDescriptions: string[] =['Aluno', 'Professor']

  constructor(
    private userService: UserService,
    private router: Router,
    private _snackBar: MatSnackBar,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.listUsers();
  }

  openSnackBarLogin() {
    this._snackBar.openFromComponent(LoginResponseComponent, {
      duration: this.durationInSeconds * 1000,
    });
  }
  
  openSnackBarRegister() {
    this._snackBar.openFromComponent(SignUpResponseComponent, {
      duration: this.durationInSeconds * 1000,
    });
  }

  createUser() {
    if(this.user.name != null && this.user.name != '' && this.user.password != null && this.user.password != '' && this.user.username != null && this.user.username != '') {
      this.userService.save(this.user).subscribe(() => {
        this.router.navigate(['/home'])
      })
    } else {
      this.router.navigate(['/signup'])
        this.openSnackBarRegister()
    }
  }

  userLogin() {
    let flUser = false
    for(var x = 0; x < this.userList.length; x++) {
      let e = this.userList[x]
      if(this.login.username != null && this.login.username.length != 0) {
        if(e.username == this.login.username && e.password == this.login.password) {
          this.userService.usuarioLogado = e;
          sessionStorage.setItem(loggedUserKey, e.id!.toString())
          sessionStorage.setItem(loggedUserLevelKey, e.userDesc)
          
          flUser = true
          break
        } 
      }
    }

    if(flUser) {
      this.router.navigate(['/home'])
    } else {
      this.router.navigate(['/live-list'])
      this.openSnackBarLogin()
    }
  }

  listUsers() {
    this.userService.list().subscribe((userList) => {
      this.userList = userList
    }) 
  }
}

@Component({
  selector: 'signup-response',
  templateUrl: 'signup-response.html',
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
export class SignUpResponseComponent {
  snackBarRefSignUp = inject(MatSnackBarRef);
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
  snackBarRefLogin = inject(MatSnackBarRef);
}
