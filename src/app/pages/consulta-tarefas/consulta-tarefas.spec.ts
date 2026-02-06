import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaTarefas } from './consulta-tarefas';

describe('ConsultaTarefas', () => {
  let component: ConsultaTarefas;
  let fixture: ComponentFixture<ConsultaTarefas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultaTarefas]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultaTarefas);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
