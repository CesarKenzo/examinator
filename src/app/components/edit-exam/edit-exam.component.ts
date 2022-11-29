import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Exam } from '../model/exam';
import { Question } from '../model/question';
import { AuthService } from '../service/auth.service';
import { ExamService } from '../service/exam.service';
import { QuestionService } from '../service/question.service';

@Component({
  selector: 'app-edit-exam',
  templateUrl: './edit-exam.component.html',
  styleUrls: ['./edit-exam.component.css']
})
export class EditExamComponent implements OnInit {

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
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    if(this.authService.isAuthenticated()) {
      this.qService.listar().subscribe((listQuestion) => {
        this.listQuestion = listQuestion
      })
      const id = this.route.snapshot.paramMap.get('id')
      this.eService.buscarPorId(parseInt(id!)).subscribe((exam) => {
        this.exam = exam
      })
    } else {
      this.router.navigate(['/live-list'])
    }
    
  }

  editExam() {
    this.exam.numberOfQuestions = this.exam.questions.length
    this.eService.editar(this.exam).subscribe(() => {
      this.router.navigate(['/listExam'])
    })
  }

  cancelar() {
    this.router.navigate(['/listExam'])
  }

  removerExam() {
    this.eService.excluir(this.exam.id!).subscribe(() => {
      this.router.navigate(['/listTask'])
    })
  }
}
