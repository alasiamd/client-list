import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainTableRoutingModule } from './main-table-routing.module';
import { MainTablePageComponent } from './pages/main-table-page/main-table-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';
import { OrderListPipe } from './pipe/order-list.pipe';


@NgModule({
  declarations: [
    MainTablePageComponent,
    OrderListPipe
  ],
  imports: [
    CommonModule,
    MainTableRoutingModule,
    SharedModule,
    RouterModule
  ]
})
export class MainTableModule { }
