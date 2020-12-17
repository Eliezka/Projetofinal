import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjetosfuturosComponent } from './projetosfuturos.component';
import { FormsModule } from '@angular/forms';
import { from } from 'rxjs';


@NgModule({
  declarations: [ProjetosfuturosComponent],
  imports: [
    FormsModule,
    CommonModule,
    
  ],
  exports: [
    ProjetosfuturosComponent,
  ]
})
export class ProjetosfuturosModule { }
