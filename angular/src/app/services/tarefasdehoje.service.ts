import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TarefasdehojeService {

  task: any;

  constructor(private http: HttpClient) { }
  

  getTodos() {
    return this.http.get('http://localhost:3000/tarefasdehoje');
    
  }
  //postTodos(dados) {
    //return this.http.post('http://localhost:3000/tarefasdehoje', dados);
  //}
}
