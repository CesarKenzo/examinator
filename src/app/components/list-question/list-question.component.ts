import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Question } from '../model/question';
import { AuthService } from '../service/auth.service';
import { QuestionService } from '../service/question.service';

@Component({
  selector: 'app-list-question',
  templateUrl: './list-question.component.html',
  styleUrls: ['./list-question.component.css']
})
export class ListQuestionComponent implements OnInit {

  listQuestion: Question[] = [];

  constructor(
    private service: QuestionService,
    private authService: AuthService, 
    private router: Router 
  ) { }

  ngOnInit(): void {
    if(this.authService.isAuthenticated()) {
      this.service.listar().subscribe((listQuestion) => {
        this.listQuestion = listQuestion
      })
    } else {
      this.router.navigate(['/live-list'])
    }
    
  }
  //displayedColumns: string[] = ['id', 'question', 'alt1', 'alt2', 'alt3', 'alt4'];
}
