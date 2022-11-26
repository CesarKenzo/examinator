import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/user';
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
  flAdmin: false
}

  constructor(
    private service: UserService, 
    private router: Router
  ) { }

  ngOnInit(): void {
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
