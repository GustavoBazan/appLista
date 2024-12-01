import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TecnologiaDetalhePage } from './tecnologia-detalhe.page';

const routes: Routes = [
  {
    path: '',
    component: TecnologiaDetalhePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TecnologiaDetalhePageRoutingModule {}
