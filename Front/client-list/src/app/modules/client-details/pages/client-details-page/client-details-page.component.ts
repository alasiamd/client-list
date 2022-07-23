import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Client } from 'src/app/models/clients';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-client-details-page',
  templateUrl: './client-details-page.component.html',
  styleUrls: ['./client-details-page.component.scss']
})
export class ClientDetailsPageComponent implements OnInit {

  public client: Client[] = [];
  public idCli: number = 0;

  constructor(private aRoute: ActivatedRoute,
              private clientService: ClientService,
              private router: Router) {}


  ngOnInit(): void {
    this.idCli = this.aRoute.snapshot.params['idCli']
    //console.log('>>>', this.aRoute.snapshot.params);
    console.log('id: ' + this.idCli);

    // this.clientService.getClient(this.idCli).subscribe(data =>{
    //   this.client = data;
    // })
    this.clientService.getClient(this.idCli).subscribe(data => {
      this.client = data;
      console.log(this.client)
    })

    //console.log('Cliente: ' + this.client);
  }

  delClient(id:number):void{
    this.clientService.delClient(id).subscribe(id => {
      this.router.navigate(['/tabla/']);
    })
  }

}
