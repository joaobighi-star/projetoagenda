import { CommonModule } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterModule } from '@angular/router';

interface Tarefa {
  nome: string;
  data: string;
  hora: string;
  descricao: string;
  prioridade: string;
}

@Component({
  selector: 'app-consulta-tarefas',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterLink, FormsModule],
  templateUrl: './consulta-tarefas.html',
  styleUrl: './consulta-tarefas.css',
})
export class ConsultaTarefas implements OnInit {
  todasTarefas = signal<Tarefa[]>([
    {
      nome: 'Reunião com equipe',
      data: '2024-01-15',
      hora: '14:00',
      descricao: 'Reunião semanal para alinhamento de projetos',
      prioridade: '3'
    },
    {
      nome: 'Entrega de relatório',
      data: '2024-01-10',
      hora: '10:00',
      descricao: 'Enviar relatório mensal para gerência',
      prioridade: '2'
    },
    {
      nome: 'Manutenção de computadores',
      data: '2024-01-05',
      hora: '09:00',
      descricao: 'Fazer manutenção preventiva nos computadores',
      prioridade: '1'
    }
  ]);
  
  tarefasFiltradas = signal<Tarefa[]>([]);
  
  filtroNome = '';
  filtroPrioridade = '';
  ordenacao = 'nome';
  
  ngOnInit() {
    this.aplicarFiltros();
  }
  
  aplicarFiltros() {
    let tarefas = [...this.todasTarefas()];
    
    // Aplicar filtro por nome
    if (this.filtroNome) {
      tarefas = tarefas.filter(t => 
        t.nome.toLowerCase().includes(this.filtroNome.toLowerCase())
      );
    }
    
    // Aplicar filtro por prioridade
    if (this.filtroPrioridade) {
      tarefas = tarefas.filter(t => 
        t.prioridade === this.filtroPrioridade
      );
    }
    
    // Aplicar ordenação
    tarefas.sort((a, b) => {
      switch (this.ordenacao) {
        case 'nome':
          return a.nome.localeCompare(b.nome);
        case 'data':
          return new Date(b.data).getTime() - new Date(a.data).getTime();
        case 'prioridade':
          return parseInt(b.prioridade) - parseInt(a.prioridade);
        default:
          return 0;
      }
    });
    
    this.tarefasFiltradas.set(tarefas);
  }
  
  formatarData(data: string): string {
    return new Date(data).toLocaleDateString('pt-BR');
  }
  
  contarPorPrioridade(prioridade: string): number {
    return this.todasTarefas().filter(t => t.prioridade === prioridade).length;
  }
  
  editarTarefa(index: number) {
    const tarefa = this.tarefasFiltradas()[index];
    alert(`Editar tarefa: ${tarefa.nome}`);
    // Em uma aplicação real, aqui você navegaria para a página de edição
  }
  
  excluirTarefa(index: number) {
    if (confirm('Tem certeza que deseja excluir esta tarefa?')) {
      const tarefa = this.tarefasFiltradas()[index];
      this.todasTarefas.update(tarefas => 
        tarefas.filter(t => t !== tarefa)
      );
      this.aplicarFiltros();
    }
  }
  
  recarregarDados() {
    this.aplicarFiltros();
  }
}
