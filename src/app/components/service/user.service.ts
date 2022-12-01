import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, first, Observable, retry, tap } from 'rxjs';

import { AuthService } from './auth.service';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  //private readonly API = 'http://localhost:3000/users';
  private readonly API = 'https://examinator-db.herokuapp.com/users';

  private userList: User[] = []; 
  LS_CHAVE: string = "usuarioLogado";

  constructor(
    private httpClient: HttpClient, 
    private authService: AuthService,
  ) { }

  //efetua o login, buscando no banco
  public login(request: User) {
  }

  //retorna o usuario logado
  public get usuarioLogado(): User {
    let usu = localStorage[this.LS_CHAVE];
    return (usu ? JSON.parse(localStorage[this.LS_CHAVE]) : null);

  }
  public set usuarioLogado(usuario: User) {
    localStorage[this.LS_CHAVE] = JSON.stringify(usuario);
  }

  //remove o usuario do registro
  logout() {
    delete localStorage[this.LS_CHAVE];
  }

  save(record: User) {
    console.log(record);
    return this.httpClient.post<User>(this.API, record);
  }

  list(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.API)
  }

  editar(user: User): Observable<User> {
    const url = `${this.API}/${user.id}`
    return this.httpClient.put<User>(url, user)

  }

  excluir(id: number): Observable<User> {
    const url = `${this.API}/${id}`
    return this.httpClient.delete<User>(url)
  }

  buscarPorId(id: number): Observable<User> {
    const url = `${this.API}/${id}`
    return this.httpClient.get<User>(url)
  }
}
