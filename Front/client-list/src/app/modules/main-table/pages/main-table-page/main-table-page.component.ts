import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

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
  public texto:string = '';

  optionsSort: { property:string | null, order:string } = { property : null, order : 'asc' };

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

    const observer1$: Subscription = this.headerService.texto.subscribe(
      (response: string) =>{
        this.texto = response
        console.log(this.texto)
      }
    )
  }

  delClient(id:number):void{
    this.clientService.delClient(id).subscribe(id => {
      this.router.navigate(['/tabla/']);
    })
  }

  changeOrder(property:string):void {
    const { order } = this.optionsSort;
    this.optionsSort = {
      property,
      order: order === 'asc' ? 'desc' : 'asc'
    }
  }

}
