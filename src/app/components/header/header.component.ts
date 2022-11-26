import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/user';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  flUser = false

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
  ) { }

  ngOnInit(): void {
    if(this.userService.usuarioLogado.id != null) {
      this.user = this.userService.usuarioLogado
      if(this.user != null && this.user?.id! > 0) {
        this.flUser = true
      }
    }
  }

  logout() {
    this.userService.logout()
    this.router.navigate(['/login'])
    this.flUser = false
  }
}
