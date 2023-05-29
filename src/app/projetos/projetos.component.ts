import { Component } from '@angular/core';

@Component({
  selector: 'projetos',
  templateUrl: './projetos.component.html'
})
export class ProjetosComponent {
  projects = [
    { "img": "../../assets/pokedex.png", "link": "https://pokedex-ma9r.onrender.com/" },
    { "img": "../../assets/coffee.png", "link": "https://rocket-coffee.onrender.com/" },
    { "img": "../../assets/be the hero.png", "link": "https://be-the-hero-51bh.onrender.com/" },
    { "img": "../../assets/consulta cep.png", "link": "https://consulta-de-cep.onrender.com/" },
    { "img": "../../assets/lista de tarefas.png", "link": "https://lista-de-tarefas-e8o8.onrender.com/" },
    { "img": "../../assets/calculadora.png", "link": "https://calculadora-t4wb.onrender.com/" },
  ]
}
