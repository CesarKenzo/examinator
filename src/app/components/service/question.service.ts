import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Question } from '../model/question';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  //private readonly API = 'http://localhost:3000/question'
  private readonly API = 'https://examinator-db.herokuapp.com/question'

  constructor(private http: HttpClient) { }

  listar(): Observable<Question[]> {
    return this.http.get<Question[]>(this.API)
  }

  criar(question: Question): Observable<Question> {
    return this.http.post<Question>(this.API, question)
  }

  editar(question: Question): Observable<Question> {
    const url = `${this.API}/${question.id}`
    return this.http.put<Question>(url, question )

  }

  excluir(id: number): Observable<Question> {
    const url = `${this.API}/${id}`
    return this.http.delete<Question>(url)
  }

  buscarPorId(id: number): Observable<Question> {
    const url = `${this.API}/${id}`
    return this.http.get<Question>(url)
  }

}
