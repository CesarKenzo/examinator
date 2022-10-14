import { Component, OnInit } from '@angular/core';
import { Question } from '../question';
import { Router } from '@angular/router'
import { QuestionService } from '../question.service';

@Component({
  selector: 'app-create-question',
  templateUrl: './create-question.component.html',
  styleUrls: ['./create-question.component.css']
})
export class CreateQuestionComponent implements OnInit {

  question: Question = {

    question: '',
    alt1: '',
    alt2: '',
    alt3: '',
    alt4: '',
    answer: '',
  }

  constructor(
    private service: QuestionService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  
  createQuestion() {
    this.service.criar(this.question).subscribe(() => {
      this.router.navigate(['/listQuestion'])
    })
  }

  cancelar() {
    this.router.navigate(['/listQuestion'])
  }
}
