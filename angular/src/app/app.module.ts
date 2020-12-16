import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TarefasdehojeModule } from './tarefasdehoje/tarefasdehoje.module';
import { TarefasdomesModule } from './tarefasdomes/tarefasdomes.module';
import { ProjetosfuturosModule } from './projetosfuturos/projetosfuturos.module';
import { routing } from './app.routing';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    TarefasdehojeModule,
    TarefasdomesModule,
    ProjetosfuturosModule,
    HttpClientModule,
    routing,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
