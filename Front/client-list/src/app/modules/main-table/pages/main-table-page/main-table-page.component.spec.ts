import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainTablePageComponent } from './main-table-page.component';

describe('MainTablePageComponent', () => {
  let component: MainTablePageComponent;
  let fixture: ComponentFixture<MainTablePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainTablePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainTablePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
