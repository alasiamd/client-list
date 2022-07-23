import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientDetailsRoutingModule } from './client-details-routing.module';
import { ClientDetailsPageComponent } from './pages/client-details-page/client-details-page.component';


@NgModule({
  declarations: [
    ClientDetailsPageComponent
  ],
  imports: [
    CommonModule,
    ClientDetailsRoutingModule
  ]
})
export class ClientDetailsModule { }
