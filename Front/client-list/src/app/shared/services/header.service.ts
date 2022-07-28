import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  titulo: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }
}
