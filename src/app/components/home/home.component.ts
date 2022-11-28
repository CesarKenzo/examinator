import { Component, OnInit } from '@angular/core';
import {ThemePalette} from '@angular/material/core';
import {ProgressSpinnerMode} from '@angular/material/progress-spinner';
import { Router } from '@angular/router';
import { loggedUserLevelKey } from 'src/app/global-variable';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  color: ThemePalette = 'primary';
  mode: ProgressSpinnerMode = 'determinate';
  value = 60;
  flProfessor: boolean = false;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    if(this.authService.isAuthenticated()){
      if(sessionStorage.getItem(loggedUserLevelKey) == 'Professor') {
        this.flProfessor = true;
      } else {
        this.flProfessor = false;
      }
    } else {
      this.router.navigate(['/live-list'])
    }
  }

}
