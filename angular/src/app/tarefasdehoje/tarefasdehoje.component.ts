import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { TarefasdehojeService } from '../services/tarefasdehoje.service';

@Component({
  selector: 'app-tarefasdehoje',
  templateUrl: './tarefasdehoje.component.html',
  styleUrls: ['./tarefasdehoje.component.css']
})
export class TarefasdehojeComponent implements OnInit {

  tarefas: any = [];

  constructor(tarefasdehojeServ: TarefasdehojeService) { 

    tarefasdehojeServ.getTodos()
    .subscribe(tarefas => this.tarefas = this.tarefas['resultados']);
    
  }

  ngOnInit(): void {
  }

}
