import { Component } from '@angular/core';

@Component({
  selector: 'tecnologias',
  templateUrl: './tecnologias.component.html'
})
export class TecnologiasComponent {
  techs = [
    { "name": "../../assets/javascript.png", "alt": "JavaScript" },
    { "name": "../../assets/react.png", "alt": "React" },
    { "name": "../../assets/node.png", "alt": "Node" },
    { "name": "../../assets/angular.png", "alt": "Angular" },
    { "name": "../../assets/java.png", "alt": "Java" },
    { "name": "../../assets/sql.png", "alt": "SQL" },
    { "name": "../../assets/git.png", "alt": "Git" },
  ];
}
