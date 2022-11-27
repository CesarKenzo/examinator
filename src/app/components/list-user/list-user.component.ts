import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/user';
import { AuthService } from '../service/auth.service';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {

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
    } else {
      this.router.navigate(['/live-list'])
    }
    
  }

}
