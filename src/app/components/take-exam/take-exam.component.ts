import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Exam } from '../model/exam';
import { Question } from '../model/question';
import { Task } from '../model/task';
import { AuthService } from '../service/auth.service';
import { ExamService } from '../service/exam.service';
import { QuestionService } from '../service/question.service';
import { TaskService } from '../service/task.service';

@Component({
  selector: 'app-take-exam',
  templateUrl: './take-exam.component.html',
  styleUrls: ['./take-exam.component.css']
})
export class TakeExamComponent implements OnInit {

  cont: number = 0;

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

  question: Question = {
    question: '',
    alt1: '',
    alt2: '',
    alt3: '',
    alt4: '',
    answer: '',
  }

  constructor(
    private eService: ExamService,
    private qService: QuestionService,
    private tService: TaskService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    if(this.authService.isAuthenticated()){
      this.tService.buscarPorId(1).subscribe((task) => {
        this.task = task
  
        if(this.task.examId != null && this.task.examId != 0) {
          this.eService.buscarPorId(this.task.examId).subscribe((exam) => {
            this.exam = exam
            if(this.exam.questions != null && this.exam.questions.length > 0) {
              this.question = exam.questions[this.cont]
            }
          })
        }
      })
    } else {
      this.router.navigate(['/live-list'])
    }
    
  }

  nextQuestion() {
    if(this.exam.questions.length < this.cont) {
      this.cont++
    }

    let temp;

    this.qService.buscarPorId(this.exam.questions[this.cont].id!).subscribe((question) => {
      //this.question = question
      this.question = this.exam.questions[this.cont]
    })
    
  }

}
