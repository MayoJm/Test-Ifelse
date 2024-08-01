import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaPrimosComponent } from './lista-primos.component';

describe('ListaPrimosComponent', () => {
  let component: ListaPrimosComponent;
  let fixture: ComponentFixture<ListaPrimosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaPrimosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaPrimosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
