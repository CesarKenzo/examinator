import { Component, OnInit } from '@angular/core';
import { Task } from '../model/task';
import { Exam } from '../model/exam';
import { ExamService } from '../service/exam.service';
import { Router } from '@angular/router';
import { TaskService } from '../service/task.service';
import { User } from '../model/user';
import { UserService } from '../service/user.service';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent implements OnInit {

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

  listExam: Exam[] = [];
  listUser: User[] = [];

  constructor(
    private tService: TaskService,
    private eService: ExamService,
    private uService: UserService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    if(this.authService.isAuthenticated()) {
      this.eService.listar().subscribe((listExam) => {
        this.listExam = listExam
      })
      this.uService.list().subscribe((listUser) => {
        this.listUser = listUser
      })
    } else {
      this.router.navigate(['/live-list'])
    }
    
  }

  createTask() {
    let temp = this.task.userId
    for(let x = 0; x < temp.length; x++) {
      this.task.userId = []
      this.task.userId.push(temp[x])
      this.tService.criar(this.task).subscribe(() => {
        this.router.navigate(['/listTask'])
      })
    }
    
  }

  cancelar() {
    this.router.navigate(['/listTask'])
  }
}
