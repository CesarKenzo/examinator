import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Exam } from '../model/exam';
import { Task } from '../model/task';
import { User } from '../model/user';
import { AuthService } from '../service/auth.service';
import { ExamService } from '../service/exam.service';
import { TaskService } from '../service/task.service';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent implements OnInit {

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
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    if(this.authService.isAuthenticated()) {
      this.eService.listar().subscribe((listExam) => {
        this.listExam = listExam
      })
      this.uService.list().subscribe((listUser) => {
        this.listUser = listUser
      })
      const id = this.route.snapshot.paramMap.get('id')
      this.tService.buscarPorId(parseInt(id!)).subscribe((task) => {
        this.task = task
      })
    } else {
      this.router.navigate(['/live-list'])
    }
    
  }

  editTask() {
    let temp = this.task.userId
    for(let x = 0; x < temp.length; x++) {
      this.task.userId = []
      this.task.userId.push(temp[x])
      this.tService.editar(this.task).subscribe(() => {
        this.router.navigate(['/listTask'])
      })
    }
    
  }

  cancelar() {
    this.router.navigate(['/listTask'])
  }
  
  removerTask() {
    this.tService.excluir(this.task.id!).subscribe(() => {
      this.router.navigate(['/listTask'])
    })
  }
}
