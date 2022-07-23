import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from '../models/clients';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  public clients: Client[] = [];
  url:string = 'http://localhost:3000/clientes/';

  httpOptions = {
    headers: {
      'Content-Type': 'application/json'
      }
  };

  constructor(private http: HttpClient) { }

  getClients(): Observable<any>{
    return this.http.get(this.url)
  }

  getClient(id:number): Observable<any>{
    return this.http.get(`${this.url}${id}`)
  }

  postClient(client:Client): Observable<any>{
    return this.http.post(this.url,client,this.httpOptions);
  }

  putClient(client: Client): Observable<any>{
    return this.http.put(`${this.url}${client.id}`,client);
  }

  delClient(id: number):Observable<any>{
    return this.http.delete(`${this.url}${id}`);
  }

}
