import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientDetailsPageComponent } from './pages/client-details-page/client-details-page.component';

const routes: Routes = [
  {
    path:'',
    component: ClientDetailsPageComponent,
    outlet: 'child'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientDetailsRoutingModule { }
