import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'tabla',
    loadChildren:() => import('../main-table/main-table.module').then(m => m.MainTableModule)
  },
  {
    path: 'clientes/:idCli',
    loadChildren:() => import('../client-details/client-details.module').then(m => m.ClientDetailsModule)
  },
  {
    path: 'form/:idCli',
    loadChildren:() => import('../client-form/client-form.module').then(m => m.ClientFormModule)
  },
  {
    path: 'form',
    loadChildren:() => import('../client-form/client-form.module').then(m => m.ClientFormModule)
  },
  {
    path:'**',
    redirectTo: '/tabla'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
