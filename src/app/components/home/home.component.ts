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

  routeTaskProf: string = '/listTask';
  routeExamProf: string = '/listExam';
  
  routeTaskStud: string = '/tasksPage';
  routeExamStud: string = '/examsPage';

  routeTask: string = '';
  routeExam: string = ''


  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    if(this.authService.isAuthenticated()){
      if(sessionStorage.getItem(loggedUserLevelKey) == 'Professor' || sessionStorage.getItem(loggedUserLevelKey) == 'Administrador') {
        this.flProfessor = true;
        this.routeExam = this.routeExamProf;
        this.routeTask = this.routeTaskProf
      } else {
        this.flProfessor = false;
        this.routeExam = this.routeExamStud;
        this.routeTask = this.routeTaskStud;
      }
    } else {
      this.router.navigate(['/live-list'])
    }
  }

}
