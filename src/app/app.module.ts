import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
    TarefasdehojeModule,
    TarefasdomesModule,
    ProjetosfuturosModule,
    routing,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
