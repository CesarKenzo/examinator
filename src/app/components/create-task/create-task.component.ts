import { Component, OnInit } from '@angular/core';
import { Task } from '../model/task';
import { Exam } from '../model/exam';
import { ExamService } from '../service/exam.service';
import { Router } from '@angular/router';
import { TaskService } from '../service/task.service';
import { User } from '../model/user';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent implements OnInit {

  task: Task = {
    grade: 0,
    userId: [],
    examId: 0
  }

  exam: Exam = {
    numberOfQuestions: 0,
    questions: [],
    subject: '',
    dueTo: new Date
  }
  
  listExam: Exam[] = [];
  listUser: User[] = [];

  constructor(
    private tService: TaskService,
    private eService: ExamService,
    private uService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.eService.listar().subscribe((listExam) => {
      this.listExam = listExam
    })

    this.uService.list().subscribe((listUser) => {
      this.listUser = listUser
    })
  }

  createTask() {
    this.tService.criar(this.task).subscribe(() => {
      this.router.navigate(['/home'])
    })
  }

  cancelar() {
    //this.router.navigate(['/listQuestion'])
  }
}
