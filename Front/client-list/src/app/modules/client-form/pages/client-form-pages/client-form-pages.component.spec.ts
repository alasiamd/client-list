import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientFormPagesComponent } from './client-form-pages.component';

describe('ClientFormPagesComponent', () => {
  let component: ClientFormPagesComponent;
  let fixture: ComponentFixture<ClientFormPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientFormPagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientFormPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
