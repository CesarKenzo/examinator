import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Question } from '../model/question';
import { AuthService } from '../service/auth.service';
import { QuestionService } from '../service/question.service';

@Component({
  selector: 'app-edit-question',
  templateUrl: './edit-question.component.html',
  styleUrls: ['./edit-question.component.css']
})
export class EditQuestionComponent implements OnInit {
  
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
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    if(this.authService.isAuthenticated()) {
      const id = this.route.snapshot.paramMap.get('id')
      this.service.buscarPorId(parseInt(id!)).subscribe((question) => {
        this.question = question
      })
    } else {
      this.router.navigate(['/live-list'])
    }
  }

  editQuestion() {
    this.service.editar(this.question).subscribe(() => {
      this.router.navigate(['/listQuestion'])
    })
  }

  cancelar() {
    this.router.navigate(['/listQuestion'])
  }

  removerQuestion() {
    this.service.excluir(this.question.id!).subscribe(() => {
      this.router.navigate(['/listQuestion'])
    })
  }
}
