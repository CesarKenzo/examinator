import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Exam } from '../model/exam';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExamService {

  //private readonly API = 'http://localhost:3000/exam'
  private readonly API = 'https://examinator-db.herokuapp.com/exam'

  constructor(private http: HttpClient) { }

  listar(): Observable<Exam[]> {
    return this.http.get<Exam[]>(this.API)
  }

  criar(exam: Exam): Observable<Exam> {
    return this.http.post<Exam>(this.API, exam)
  }

  editar(exam: Exam): Observable<Exam> {
    const url = `${this.API}/${exam.id}`
    return this.http.put<Exam>(url, exam)

  }

  excluir(id: number): Observable<Exam> {
    const url = `${this.API}/${id}`
    return this.http.delete<Exam>(url)
  }

  buscarPorId(id: number): Observable<Exam> {
    const url = `${this.API}/${id}`
    return this.http.get<Exam>(url)
  }

}
