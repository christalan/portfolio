import { Component } from '@angular/core';

@Component({
  selector: 'rodape',
  templateUrl: './rodape.component.html'
})
export class RodapeComponent {
  projects = [
    { "img": "../../assets/cadastro empresarial.png", "link": "#" },
    { "img": "../../assets/be the hero.png", "link": "#" },
    { "img": "../../assets/pokedex.png", "link": "#" },
    { "img": "../../assets/calculadora.png", "link": "#" },

    // { "img": "../../assets/coffee.png", "link": "#" },
    { "img": "../../assets/em breve.png", "link": "#" },
    
    { "img": "../../assets/em breve.png", "link": "#" }
  ]
}
