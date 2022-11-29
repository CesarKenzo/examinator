import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { loggedUserLevelKey } from 'src/app/global-variable';
import { User } from '../model/user';
import { AuthService } from '../service/auth.service';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  profBackRoute: string = 'home';
  adminBackRoute: string = 'adminPage';
  backRoute: string = '';

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

  userDescriptions: string[] =['Aluno', 'Professor', 'Administrador']

  constructor(
    private service: UserService,
    private authService: AuthService, 
    private router: Router
  ) { }

  ngOnInit(): void {
    if(!this.authService.isAuthenticated()) {
      this.router.navigate(['/live-list'])
      if(sessionStorage.getItem(loggedUserLevelKey) == 'Professor') {
        this.backRoute = this.profBackRoute;
      } else {
        this.backRoute = this.adminBackRoute;
      }
    }
  }

  createUser() {
    this.service.save(this.user).subscribe(() => {
      this.router.navigate(['/listUser'])
    })
  }

  cancelar() {
    this.router.navigate(['/listUser'])
  }
}
