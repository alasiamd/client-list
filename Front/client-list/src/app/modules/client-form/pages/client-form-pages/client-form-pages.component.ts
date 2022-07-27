import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Client } from 'src/app/models/clients';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-client-form-pages',
  templateUrl: './client-form-pages.component.html',
  styleUrls: ['./client-form-pages.component.scss']
})
export class ClientFormPagesComponent implements OnInit {

  public drive1: string = 'https://drive.google.com/uc?export=view&id=';
  public drive2: string = '';

  public client: Client[] = [
    {
      id:0,
      nombre:'',
  version_fox: '',
  imp_pdf:'',
  tipo:'',
  contacto:'',
  tecnico: '',
  servidor: false,
  servidor_windows:'',
  servidor_ip: '',
  servidor_contrasena:'',
  mail: false,
  mail_herramienta:'',
  mail_cuenta:'',
  mail_servidor:'',
  mail_contrasena: '',
  generacion_pdf:false,
  generacion_pdf_empresa: '',
  any_desk_id: '',
  any_desk_pass: '',
  recaudacion: '',
  logo: ''
    }
  ];
  public idCli: number = 0;

  formClient: FormGroup = new FormGroup({});

  constructor(private clientService: ClientService,
              private router: Router,
              private aRoute: ActivatedRoute,
              private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.idCli = this.aRoute.snapshot.params['idCli']
    //console.log('>>>', this.aRoute.snapshot.params);
    if (this.idCli !== null){
    this.clientService.getClient(this.idCli).subscribe(data => {
      this.client = data;
      console.log(this.client)
      })
    }
    //console.log('id: ' + this.formBuilder.group);
    this.formClient = new FormGroup({
        id: new FormControl(0),
        nombre: new FormControl(''),
        version_fox: new FormControl(''),
        imp_pdf: new FormControl(''),
        tipo: new FormControl(''),
        contacto: new FormControl(''),
        tecnico: new FormControl(''),
        servidor: new FormControl(false),
        servidor_windows: new FormControl(''),
        servidor_ip: new FormControl(''),
        servidor_contrasena: new FormControl(''),
        mail: new FormControl(false),
        mail_herramienta: new FormControl(''),
        mail_cuenta: new FormControl(''),
        mail_servidor: new FormControl(''),
        mail_contrasena: new FormControl(''),
        generacion_pdf: new FormControl(false),
        generacion_pdf_empresa: new FormControl(''),
        any_desk_id: new FormControl(''),
        any_desk_pass: new FormControl(''),
        recaudacion: new FormControl(''),
        logo: new FormControl('')
    })

  }

  send():void{
    if(this.idCli == null){
      this.postClient()
    }
    else{
      this.putClient()
    }
  }

  putClient(): void {
    const cliente = this.formClient.value;
    this.clientService.putClient(cliente).subscribe(i => {
      this.router.navigate(['tabla/'])
    })

  }

  postClient(): void{
    const cliente = this.formClient.value;
    console.log(cliente)
    this.clientService.postClient(cliente).subscribe(i => {
      console.log(this.formClient.value)
      this.router.navigate(['tabla/'])
    })
  }

  updateImg(drive2:string){
    const imgUrl = this.drive1 + drive2;
    this.client[0].logo = imgUrl;
  }

}
