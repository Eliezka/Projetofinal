import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TarefasdehojeComponent } from './tarefasdehoje.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [TarefasdehojeComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    
   
  ], 
  exports: [
    TarefasdehojeComponent,
    
  ]
})
export class TarefasdehojeModule { }
