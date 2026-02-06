import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-alterar-senha',
  standalone: true,
  imports: [RouterModule, RouterLink, CommonModule, FormsModule],
  templateUrl: './alterar-senha.html',
  styleUrl: './alterar-senha.css',
})
export class AlterarSenha {
  senhaAtual: string = '';
  novaSenha: string = '';
  confirmacaoSenha: string = '';

  onSubmit() {
    // Implementar lógica de alteração de senha
    console.log('Alterar senha:', this.senhaAtual, this.novaSenha, this.confirmacaoSenha);
  }

}
