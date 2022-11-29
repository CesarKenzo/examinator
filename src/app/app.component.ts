import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { flLogged, loggedUserKey, loggedUserLevelKey } from './global-variable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnChanges {
  showFiller = false;
  Admin = false;
  Professor: boolean = false;
  Logado : boolean = false; 
  title = 'Exam-inator';

  routeTaskProf: string = '/listTask';
  routeExamProf: string = '/listExam';
  
  routeTaskStud: string = '/tasksPage';
  routeExamStud: string = '/examsPage';

  routeTask: string = '';
  routeExam: string = ''

  constructor(
    private router: Router
  ) { 
    this.Logado = sessionStorage.getItem(loggedUserKey) == null ? false:true
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(sessionStorage.getItem(loggedUserKey) == null){
      this.Logado = false 
      this.Admin = false
    } else {
      this.Logado = true
      if(sessionStorage.getItem(loggedUserLevelKey) == 'Administrador') {
        this.Admin = true
      } else {
        this.Admin = false
      }
    }
  }

  ngOnInit(): void {
    if(sessionStorage.getItem(loggedUserKey) == null){
      this.Logado = false 
      this.Admin = false
    } else {
      this.Logado = true
      if(sessionStorage.getItem(loggedUserLevelKey) == 'Administrador') {
        this.Admin = true
      } else {
        this.Admin = false
      }
      if(sessionStorage.getItem(loggedUserLevelKey) == 'Professor' || sessionStorage.getItem(loggedUserLevelKey) == 'Administrador') {
        this.Professor = true;
        this.routeExam = this.routeExamProf;
        this.routeTask = this.routeTaskProf
      } else {
        this.Professor = false;
        this.routeExam = this.routeExamStud;
        this.routeTask = this.routeTaskStud;
      }
    }
  }

  logoff() {
    sessionStorage.removeItem(loggedUserKey)
    sessionStorage.removeItem(loggedUserLevelKey)
    this.router.navigate(['/live-list'])
  }
}
