import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { NovidadesComponent } from './components/novidades/novidades.component';
import { LoginComponent } from './components/login/login.component';
import { LiveComponent } from './components/live/live.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'cad', component: CadastroComponent},
  {path: 'news', component: NovidadesComponent},
  {path: 'log', component: LoginComponent},
  {path: 'live', component: LiveComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
