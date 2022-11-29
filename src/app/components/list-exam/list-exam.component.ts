import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { loggedUserKey, loggedUserLevelKey } from 'src/app/global-variable';
import { Exam } from '../model/exam';
import { Task } from '../model/task';
import { AuthService } from '../service/auth.service';
import { ExamService } from '../service/exam.service';
import { TaskService } from '../service/task.service';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-list-exam',
  templateUrl: './list-exam.component.html',
  styleUrls: ['./list-exam.component.css']
})
export class ListExamComponent implements OnInit {

  profBackRoute: string = 'home';
  adminBackRoute: string = 'adminPage';
  backRoute: string = '';

  exam: Exam = {
    numberOfQuestions: 0,
    questions: [],
    subject: '',
    dueTo: new Date
  }

  task: Task = {
    title: '',
    grade: 0,
    userId: [],
    exam: this.exam, 
    userAnswers: []
  }

  examList: Exam[] = []
  taskList: Task[] = []

  constructor(
    private authService: AuthService,
    private eService: ExamService,
    private tService: TaskService,
    private uService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
    if(this.authService.isAuthenticated()) {
      this.eService.listar().subscribe((examList) => {
        this.examList = examList
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
