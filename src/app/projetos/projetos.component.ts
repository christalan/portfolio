import { Component } from '@angular/core';

@Component({
  selector: 'projetos',
  templateUrl: './projetos.component.html'
})
export class ProjetosComponent {
  projects = [
    { "img": "../../assets/pokedex.png", "link": "https://pokedex-theta-sage.vercel.app/" },
    { "img": "../../assets/coffee.png", "link": "https://rocket-coffee-beta.vercel.app/" },
    { "img": "../../assets/calculadora.png", "link": "https://calculadora-three-bay.vercel.app/" },
    { "img": "../../assets/consulta cep.png", "link": "https://consulta-de-cep-eight.vercel.app/" },
    { "img": "../../assets/em breve.png", "link": "#" },
    { "img": "../../assets/em breve.png", "link": "#" }
  ]
}
