import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TarefasdomesComponent } from './tarefasdomes.component';



@NgModule({
  declarations: [TarefasdomesComponent],
  imports: [
    CommonModule,
  ],
  exports: [
    TarefasdomesComponent,
  ]
})
export class TarefasdomesModule { }
