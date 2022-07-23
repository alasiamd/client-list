import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientFormRoutingModule } from './client-form-routing.module';
import { ClientFormPagesComponent } from './pages/client-form-pages/client-form-pages.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ClientFormPagesComponent
  ],
  imports: [
    CommonModule,
    ClientFormRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class ClientFormModule { }
