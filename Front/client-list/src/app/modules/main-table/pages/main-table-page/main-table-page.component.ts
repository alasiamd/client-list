import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Client } from 'src/app/models/clients';
import { ClientService } from '../../../../services/client.service';

@Component({
  selector: 'app-main-table-page',
  templateUrl: './main-table-page.component.html',
  styleUrls: ['./main-table-page.component.scss']
})
export class MainTablePageComponent implements OnInit {

  public clients: Client [] = [];

  constructor(private clientService: ClientService,
              private router: Router) { }

  ngOnInit(): void {
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
