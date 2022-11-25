import { Component, OnInit } from '@angular/core';
import { Exam } from '../model/exam';
import { Question } from '../model/question';
import { ExamService } from '../service/exam.service';
import { QuestionService } from '../service/question.service';

@Component({
  selector: 'app-take-exam',
  templateUrl: './take-exam.component.html',
  styleUrls: ['./take-exam.component.css']
})
export class TakeExamComponent implements OnInit {

  cont: number = 0;

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
    private service: ExamService,
    private qService: QuestionService
  ) { }

  ngOnInit(): void {
    this.service.buscarPorId(2).subscribe((exam) => {
      this.exam = exam
      if(this.exam != null && this.exam.questions.length > 0) {
        this.question = this.exam.questions[this.cont]
      }
    })
  }

  nextQuestion() {
    if(this.exam.questions.length < this.cont) {
      this.cont++
    }

    this.qService.buscarPorId(this.exam.questions[this.cont].id!).subscribe((question) => {
      //this.question = question
      this.question = this.exam.questions[this.cont]
    })
    
  }

}
