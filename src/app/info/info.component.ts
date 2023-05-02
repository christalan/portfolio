import { Component } from '@angular/core';

@Component({
  selector: 'info',
  templateUrl: './info.component.html'
})
export class InfoComponent {
  idade: number;

  constructor() {
    // Cria um objeto Date com a data de nascimento
    const dataNascimento = new Date(2000, 8, 27); 
    // Cria um objeto Date com a data atual
    const dataAtual = new Date(); 
    // Calcula a diferença entre as datas em milissegundos
    let diff = dataAtual.getTime() - dataNascimento.getTime(); 
    // Converte a diferença em anos (considerando anos bissextos)
    diff = diff / (1000 * 60 * 60 * 24 * 365.25); 
    // A idade é a parte inteira da diferença
    this.idade = Math.floor(diff); 
  }
}
