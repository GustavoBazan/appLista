import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TecnologiaDetalhePage } from './tecnologia-detalhe.page';

describe('TecnologiaDetalhePage', () => {
  let component: TecnologiaDetalhePage;
  let fixture: ComponentFixture<TecnologiaDetalhePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TecnologiaDetalhePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
