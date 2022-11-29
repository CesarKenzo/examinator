import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { loggedUserKey, loggedUserLevelKey } from 'src/app/global-variable';
import { Exam } from '../model/exam';
import { Task } from '../model/task';
import { User } from '../model/user';
import { AuthService } from '../service/auth.service';
import { ExamService } from '../service/exam.service';
import { TaskService } from '../service/task.service';
import { UserService } from '../service/user.service';


@Component({
  selector: 'app-list-task',
  templateUrl: './list-task.component.html',
  styleUrls: ['./list-task.component.css']
})
export class ListTaskComponent implements OnInit {

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
  userList: User[] = []

  constructor(
    private authService: AuthService,
    private eService: ExamService,
    private tService: TaskService,
    private uService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
    if(this.authService.isAuthenticated()) {
      this.tService.listar().subscribe((taskList) => {
        var userId = sessionStorage.getItem(loggedUserKey) 
        this.taskList = taskList
      })
      this.uService.list().subscribe((userList) => {
        this.userList = userList
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
