import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'projetos',
  templateUrl: './projetos.component.html'
})
export class ProjetosComponent implements OnInit {
  projects = [
    { "img": "../../assets/pokedex.png", "link": "https://pokedex-ma9r.onrender.com/" },
    { "img": "../../assets/coffee.png", "link": "https://rocket-coffee.onrender.com/" },
    { "img": "../../assets/be the hero.png", "link": "https://be-the-hero-51bh.onrender.com/" },
    { "img": "../../assets/consulta cep.png", "link": "https://consulta-de-cep.onrender.com/" },
    { "img": "../../assets/lista de tarefas.png", "link": "https://lista-de-tarefas-e8o8.onrender.com/" },
    { "img": "../../assets/calculadora.png", "link": "https://calculadora-t4wb.onrender.com/" },
    // { "img": "../../assets/em breve.png", "link": "#" },
    // { "img": "../../assets/em breve.png", "link": "#" },
    // { "img": "../../assets/em breve.png", "link": "#" },
  ];

  currentPage = 0;
  pageSize = 3;
  displayedProjects!: any[];

  ngOnInit() {
    this.setPageSize();
    this.displayedProjects = this.projects.slice(0, this.pageSize);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.setPageSize();
    this.updateDisplayedProjects();
  }

  setPageSize() {
    const isMobile = window.innerWidth <= 767;
    this.pageSize = isMobile ? 1 : 3;
  }

  nextPage() {
    const totalPages = Math.ceil(this.projects.length / this.pageSize);
    if (this.currentPage < totalPages - 1) {
      this.currentPage++;
      this.updateDisplayedProjects();
    }
  }

  previousPage() {
    if (this.currentPage > 0) {
      this.currentPage--;
      this.updateDisplayedProjects();
    }
  }

  updateDisplayedProjects() {
    const startIndex = this.currentPage * this.pageSize;
    this.displayedProjects = this.projects.slice(startIndex, startIndex + this.pageSize);
  }
}
