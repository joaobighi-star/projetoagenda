import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'painel-principal',
    pathMatch: 'full'
  },
  {
    path: 'painel-principal',
    loadComponent: () => import('./pages/painel-principal/painel-principal')
      .then(m => m.PainelPrincipal)
  },
  {
    path: 'cadastro-tarefas',
    loadComponent: () => import('./pages/cadastro-tarefas/cadastro-tarefas')
      .then(m => m.CadastroTarefas)
  },
  {
    path: 'consulta-tarefas',
    loadComponent: () => import('./pages/consulta-tarefas/consulta-tarefas')
      .then(m => m.ConsultaTarefas)
  },

  {
    path: 'dados-do-usuario',
    loadComponent: () => import('./pages/dados-do-usuario/dados-do-usuario')
      .then(m => m.DadosDoUsuario)
  },

  {
    path: 'alterar-senha',
    loadComponent: () => import('./pages/alterar-senha/alterar-senha')
      .then(m => m.AlterarSenha)
  },

  {
    path: '**',
    redirectTo: 'painel-principal'
  }


];
