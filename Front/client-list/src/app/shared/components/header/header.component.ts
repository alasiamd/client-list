import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { HeaderService } from '../../services/header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public titulo: string = '';

  constructor(public headerService: HeaderService) { }

  ngOnInit(): void {
    const observer1$: Subscription = this.headerService.titulo.subscribe(
      (response: string) => {
        this.titulo = response;
        console.log(this.titulo)
      }
    )
  }

}
