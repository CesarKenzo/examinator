import { Component, OnInit } from '@angular/core';
import { Question } from '../question';
import { QuestionService } from '../question.service';

@Component({
  selector: 'app-list-question',
  templateUrl: './list-question.component.html',
  styleUrls: ['./list-question.component.css']
})
export class ListQuestionComponent implements OnInit {

  listQuestion: Question[] = [];

  constructor(private service: QuestionService) { }

  ngOnInit(): void {
    this.service.listar().subscribe((listQuestion) => {
      this.listQuestion = listQuestion
    })
  }
  //displayedColumns: string[] = ['id', 'question', 'alt1', 'alt2', 'alt3', 'alt4'];
}
