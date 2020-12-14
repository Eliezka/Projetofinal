import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TarefasdehojeComponent } from './tarefasdehoje.component';


@NgModule({
  declarations: [TarefasdehojeComponent],
  imports: [
    CommonModule,
   
  ], 
  exports: [
    TarefasdehojeComponent,
  ]
})
export class TarefasdehojeModule { }
