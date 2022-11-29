import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from '../model/task';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  //private readonly API = 'http://localhost:3000/task'
  private readonly API = 'https://examinator-db.herokuapp.com/task'

  constructor(private http: HttpClient) { }

  listar(): Observable<Task[]> {
    return this.http.get<Task[]>(this.API)
  }

  criar(task: Task): Observable<Task> {
    return this.http.post<Task>(this.API, task)
  }

  editar(task: Task): Observable<Task> {
    const url = `${this.API}/${task.id}`
    return this.http.put<Task>(url, task)

  }

  excluir(id: number): Observable<Task> {
    const url = `${this.API}/${id}`
    return this.http.delete<Task>(url)
  }

  buscarPorId(id: number): Observable<Task> {
    const url = `${this.API}/${id}`
    return this.http.get<Task>(url)
  }

}
