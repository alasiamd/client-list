import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Client } from 'src/app/models/clients';
import { HeaderService } from 'src/app/shared/services/header.service';
import { ClientService } from '../../../../services/client.service';

@Component({
  selector: 'app-main-table-page',
  templateUrl: './main-table-page.component.html',
  styleUrls: ['./main-table-page.component.scss']
})
export class MainTablePageComponent implements OnInit {

  public clients: Client [] = [];

  public titulo:string = '';

  constructor(private clientService: ClientService,
              private router: Router,
              private headerService: HeaderService) { }

  ngOnInit(): void {

    this.titulo = 'tabla';
    this.headerService.titulo.emit(this.titulo);

    this.clientService.getClients().subscribe(data => {
      this.clients = data;
      console.log('Clientes: ' + this.clients)
    })
  }

  delClient(id:number):void{
    this.clientService.delClient(id).subscribe(id => {
      this.router.navigate(['/tabla/']);
    })
  }



}
