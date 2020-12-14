import { Routes, RouterModule } from '@angular/router';

import { TarefasdehojeComponent } from './tarefasdehoje/tarefasdehoje.component';
import { TarefasdomesComponent } from './tarefasdomes/tarefasdomes.component';
import { ProjetosfuturosComponent } from './projetosfuturos/projetosfuturos.component';
import { ModuleWithProviders } from '@angular/core';
import { HomeComponent } from './home/home.component';


const APP_ROUTES: Routes = [
    { path: '', component: HomeComponent },
    { path: 'tarefasdehoje', component: TarefasdehojeComponent },
    { path: 'tarefasdomes', component: TarefasdomesComponent },
    { path: 'projetosfuturos', component: ProjetosfuturosComponent },

];

export const routing: ModuleWithProviders<RouterModule> = RouterModule.forRoot(APP_ROUTES);
