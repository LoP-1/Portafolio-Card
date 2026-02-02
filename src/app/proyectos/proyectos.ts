import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-proyectos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './proyectos.html',
})
export class Proyectos {
  projects = [
    {
      id: 1,
      title: 'Gestión Farmacéutica',
      mainTech: "spring",
      type: 'Backend System',
      description: 'Diseño e implementación de backend para control de inventario y ventas enfocado en integridad de datos.',
      features: ['Control de stock', 'Hardening de VPS', 'Nginx Proxy', 'SEO Técnico'],
      tech: ['Java', 'Spring Boot', 'Linux', 'UFW'],
      repositoryUrl: 'https://github.com/LoP-1/gestion-farmaceutica',
      imageUrl: '/assets/images/projects/farmaceutica.png'
    },
    {
      id: 2,
      title: 'Sistemas Críticos DREJ',
      type: 'Fullstack App',
      mainTech: "angular",
      description: 'Mantenimiento y optimización de sistemas de Gestión Documental y Planillas de la Dirección de Educación.',
      features: ['Optimización de procesos', 'SSL Config', 'VPS Management'],
      tech: ['Spring Boot', 'Angular', 'Linux'],
      repositoryUrl: 'https://github.com/LoP-1/sistemas-drej',
      imageUrl: '/assets/images/projects/drej.png'
    },
    {
      id: 3,
      title: 'Portal de Cesantes',
      type: 'Web Redesign',
      mainTech: "laravel",
      description: 'Modernización de interfaz y mejora de experiencia de usuario (UX) para el portal de consultas institucional.',
      features: ['Rediseño UI/UX', 'Optimización de consultas'],
      tech: ['Laravel', 'MySQL', 'Responsive Design'],
      repositoryUrl: 'https://github.com/LoP-1/portal-cesantes',
      imageUrl: '/assets/images/projects/cesantes.png'
    }
  ];

  selectedProject = signal(this.projects[0]);

  select(project: any) {
    this.selectedProject.set(project);
  }
}