import { Component, inject, OnInit } from '@angular/core';
import { MatSnackBar, MatSnackBarRef } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { User } from '../model/user';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  durationInSeconds = 5;

  user: User = {
    id: 0,
    name: '',
    username: '',
    password: '',
    profile: '',
    description: '',
    email: '',
    flAdmin: false
  }

  constructor(
    private userService: UserService,
    private router: Router,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
  }

  openSnackBar() {
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
        this.openSnackBar()
    }
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
  snackBarRef = inject(MatSnackBarRef);
}

