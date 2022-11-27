import { Component, OnInit } from '@angular/core';
import { Question } from '../model/question';
import { Router } from '@angular/router'
import { QuestionService } from '../service/question.service';
import { AuthService } from '../service/auth.service';

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

  alternativas: string[] =['A', 'B', 'C', 'D']

  constructor(
    private service: QuestionService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    if(!this.authService.isAuthenticated()) {
      this.router.navigate(['/live-list'])
    }
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
