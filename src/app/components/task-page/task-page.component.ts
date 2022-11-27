import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { loggedUserKey } from 'src/app/global-variable';
import { Exam } from '../model/exam';
import { Task } from '../model/task';
import { AuthService } from '../service/auth.service';
import { ExamService } from '../service/exam.service';
import { TaskService } from '../service/task.service';
import { UserService } from '../service/user.service';


@Component({
  selector: 'app-task-page',
  templateUrl: './task-page.component.html',
  styleUrls: ['./task-page.component.css']
})
export class TaskPageComponent implements OnInit {

  task: Task = {
    grade: 0,
    userId: [],
    examId: 0, 
    userAnswers: []
  }

  exam: Exam = {
    numberOfQuestions: 0,
    questions: [],
    subject: '',
    dueTo: new Date
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
      this.tService.listar().subscribe((taskList) => {
        var userId = sessionStorage.getItem(loggedUserKey) 
        this.taskList = taskList.filter(t => t.userId.includes(Number.parseInt(userId!)) && t.grade != null)
      })
    } else {
      this.router.navigate(['/live-list'])
    }
  }
}