import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
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
  selector: 'app-cadastro-tarefas',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, RouterLink],
  templateUrl: './cadastro-tarefas.html',
  styleUrl: './cadastro-tarefas.css',
})
export class CadastroTarefas {
  novaTarefa: Tarefa = {
    nome: '',
    data: '',
    hora: '',
    descricao: '',
    prioridade: ''
  };

  tarefasCadastradas = signal<Tarefa[]>([]);
  mensagemSucesso = signal(false);

  cadastrarTarefa() {
    if (this.novaTarefa.nome && this.novaTarefa.data &&
      this.novaTarefa.hora && this.novaTarefa.prioridade) {

      // Adiciona à lista
      this.tarefasCadastradas.update(tarefas => [
        { ...this.novaTarefa },
        ...tarefas
      ]);

      // Mostra mensagem de sucesso
      this.mensagemSucesso.set(true);

      // Limpa o formulário após 3 segundos
      setTimeout(() => {
        this.limparFormulario();
        this.mensagemSucesso.set(false);
      }, 3000);
    }
  }

  limparFormulario() {
    this.novaTarefa = {
      nome: '',
      data: '',
      hora: '',
      descricao: '',
      prioridade: ''
    };
  }

  removerTarefa(index: number) {
    this.tarefasCadastradas.update(tarefas =>
      tarefas.filter((_, i) => i !== index)
    );
  }

  fecharMensagem() {
    this.mensagemSucesso.set(false);
  }

}
