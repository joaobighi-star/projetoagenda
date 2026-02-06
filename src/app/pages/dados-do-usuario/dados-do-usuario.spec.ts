import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DadosDoUsuario } from './dados-do-usuario';

describe('DadosDoUsuario', () => {
  let component: DadosDoUsuario;
  let fixture: ComponentFixture<DadosDoUsuario>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DadosDoUsuario]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DadosDoUsuario);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
