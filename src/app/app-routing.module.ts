import { ProdutosComponent } from './produtos/produtos.component';
import { AgroComponent } from './agro/agro.component';
import { HistoriaComponent } from './historia/historia.component';
import { ContatoComponent } from './contato/contato.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'contato', component: ContatoComponent },
  { path: 'historia', component: HistoriaComponent },
  { path: 'agro', component: AgroComponent },
  { path: 'produtos', component: ProdutosComponent },
  { path: '**', redirectTo: 'home' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor() { }
}
