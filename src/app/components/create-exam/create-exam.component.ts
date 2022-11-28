import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuestionService } from '../service/question.service';
import { Question } from '../model/question';
import { Exam } from '../model/exam';
import { ExamService } from '../service/exam.service';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-create-exam',
  templateUrl: './create-exam.component.html',
  styleUrls: ['./create-exam.component.css']
})
export class CreateExamComponent implements OnInit {

  exam: Exam = {
    numberOfQuestions: 0,
    questions: [],
    subject: '',
    dueTo: new Date
  }

  listQuestion: Question[] = [];
  
  constructor(
    private qService: QuestionService,
    private eService: ExamService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    if(this.authService.isAuthenticated()) {
      this.qService.listar().subscribe((listQuestion) => {
        this.listQuestion = listQuestion
      })
    } else {
      this.router.navigate(['/live-list'])
    }
    
  }

  createExam() {
    this.exam.numberOfQuestions = this.exam.questions.length
    this.eService.criar(this.exam).subscribe(() => {
      this.router.navigate(['/listExam'])
    })
  }

  cancelar() {
    this.router.navigate(['/listExam'])
  }

}
