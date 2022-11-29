import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { loggedUserLevelKey } from 'src/app/global-variable';
import { User } from '../model/user';
import { AuthService } from '../service/auth.service';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {

  profBackRoute: string = 'home';
  adminBackRoute: string = 'adminPage';
  backRoute: string = '';
  
  listUser: User[] = [];

  constructor(
    private service: UserService, 
    private authService: AuthService, 
    private router: Router 
  ) { }

  ngOnInit(): void {
    if(this.authService.isAuthenticated()) {
      this.service.list().subscribe((listUser) => {
        this.listUser = listUser
      })

      if(sessionStorage.getItem(loggedUserLevelKey) == 'Professor') {
        this.backRoute = this.profBackRoute;
      } else {
        this.backRoute = this.adminBackRoute;
      }
    } else {
      this.router.navigate(['/live-list'])
    }
  }
}
