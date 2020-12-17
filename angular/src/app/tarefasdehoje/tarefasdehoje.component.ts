import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { TarefasdehojeService } from '../services/tarefasdehoje.service';

@Component({
  selector: 'app-tarefasdehoje',
  templateUrl: './tarefasdehoje.component.html',
  styleUrls: ['./tarefasdehoje.component.css']
})
export class TarefasdehojeComponent implements OnInit {

  data = '18 de dezembro de 2020';

  tasks: any;

  constructor(tarefasdehojeServ: TarefasdehojeService) { 
    tarefasdehojeServ.getTodos().subscribe(tasks => { this.tasks = tasks;
    console.log(tasks);
    
  });


  
    }
  
  ngOnInit(): void {
   
  }

}
