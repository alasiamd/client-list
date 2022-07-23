import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainTablePageComponent } from './pages/main-table-page/main-table-page.component';

const routes: Routes = [
  {
    path:'',
    component: MainTablePageComponent,
    outlet: 'child'

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainTableRoutingModule { }
