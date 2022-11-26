import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {

  listUser: User[] = [];

  constructor(
    private service: UserService 
  ) { }

  ngOnInit(): void {
    this.service.list().subscribe((listUser) => {
      this.listUser = listUser
    })
  }

}
