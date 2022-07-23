import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientFormPagesComponent } from './pages/client-form-pages/client-form-pages.component';

const routes: Routes = [
  {
    path:'',
    component: ClientFormPagesComponent,
    outlet: 'child'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientFormRoutingModule { }
