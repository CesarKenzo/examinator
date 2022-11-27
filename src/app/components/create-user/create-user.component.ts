import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/user';
import { AuthService } from '../service/auth.service';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

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
