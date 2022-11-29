import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../model/user';
import { AuthService } from '../service/auth.service';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

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
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    if(this.authService.isAuthenticated()) {
      const id = this.route.snapshot.paramMap.get('id')
      this.service.buscarPorId(parseInt(id!)).subscribe((user) => {
        this.user = user
      })
    } else {
      this.router.navigate(['/live-list'])
    }
  }

  editUser() {
    this.service.editar(this.user).subscribe(() => {
      this.router.navigate(['/listUser'])
    })
  }

  cancelar() {
    this.router.navigate(['/listUser'])
  }

  removerUser() {
    this.service.excluir(this.user.id!).subscribe(() => {
      this.router.navigate(['/listUser'])
    })
  }
}
