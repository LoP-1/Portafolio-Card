import { Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-proyectos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './proyectos.html',
})
export class Proyectos {

isModalOpen = signal(false); 

  openModal() {
    this.isModalOpen.set(true);
  }

  closeModal() {
    this.isModalOpen.set(false);
  }


  sortOrder = signal<'asc' | 'desc'>('asc');

  projects = [
    {
      id: 1,
      title: 'Portafolio :D',
      type: 'Frontend',
      mainTechs: ["angular"],
      description: 'Ya lo estas viendo :D',
      features: ['Interfaz interactiva y responsiva', 'Navegación fluida con Angular Router', 'Diseño basado en componentes standalone'],
      tech: ['Angular', 'Tailwind CSS', 'TypeScript', 'GitHub'],
      repositoryUrl: 'https://github.com/LoP-1/Portafolio-Card',
      imageUrl: 'cv.png'
    },
    {
      id: 2,
      title: 'Gestor de archivos simple',
      type: 'Fullstack',
      mainTechs: ["javascript", "linux"],
      description: 'Herramienta web ligera para la administración y organización de archivos directamente en el servidor.',
      features: ['CRUD de archivos en el sistema local', 'Buscador de archivos por metadatos', 'Optimización de lectura en disco'],
      tech: ['JavaScript', 'CSS', 'Linux'],
      repositoryUrl: 'https://github.com/LoP-1/sistema-almacenamiento-servidor-js',
      imageUrl: 'js.png'
    },
    {
      id: 3,
      title: 'Sistema Boletería DREJ',
      type: 'Fullstack',
      mainTechs: ["spring", "angular"],
      description: 'Sistema interno desarrollado para el manejo y generación automática de boletas de trámites institucionales.',
      features: ['Generación dinámica de reportes', 'Seguridad basada en roles y tokens JWT', 'Dashboard interactivo con gráficas de gestión'],
      tech: ['Java', 'Spring Boot', 'Angular', 'Mysql', 'Linux'],
      repositoryUrl: 'https://github.com/LoP-1/Boleteria-DREJ',
      imageUrl: 'boletas.png'
    },
    {
      id: 4,
      title: 'Consulta de Boletas DREJ',
      type: 'Fullstack',
      mainTechs: ["laravel", "angular"],
      description: 'Portal web oficial para la consulta de boletas del personal cesante. URL: https://boletas.drej.edu.pe',
      features: ['Migración de datos masivos mediante formateadores Python', 'Doble backend para alta disponibilidad', 'Interfaz responsiva optimizada para usuarios adultos'],
      tech: ['Laravel', 'Angular', 'Spring Boot', 'Python', 'MySQL', 'Linux'],
      repositoryUrl: 'https://github.com/LoP-1/Sistema-Boletas-DREJ',
      imageUrl: 'boletas-cesantes.png'
    },
    {
      id: 5,
      title: 'API Botica Said',
      type: 'Backend',
      mainTechs: ["spring", "linux"],
      description: 'Sistema de gestión para boticas con lógica de inventario profesional (versión pública).',
      features: ['Lógica FIFO para rotación de productos farmacéuticos', 'Manejo de persistencia de datos complejos', 'Hardening de seguridad en VPS con firewall UFW'],
      tech: ['Java', 'Spring Boot', 'MySQL', 'Linux', 'UFW'],
      repositoryUrl: 'https://github.com/LoP-1/Botica_API',
      imageUrl: 'Said.png'
    },
    {
      id: 6,
      title: 'Gestión de Actas DREJ',
      type: 'Fullstack',
      mainTechs: ["laravel", "angular"],
      description: 'Aplicación para el control y digitalización de actas internas de la Dirección Regional de Educación Junín.',
      features: ['Compatibilidad con servidores CPanel mediante Laravel', 'Manejo de grandes volúmenes de documentos', 'Formateador de datos especializado en Python'],
      tech: ['Spring Boot', 'Laravel', 'Angular', 'Python', 'MySQL'],
      repositoryUrl: 'https://github.com/LoP-1/Gestion_de_Actas',
      imageUrl: 'foto.png'
    },
    {
      id: 7,
      title: 'CerebrexNode TakeControl',
      type: 'Modding',
      mainTechs: ["csharp"],
      description: 'Modificación técnica para el videojuego Rimworld desarrollada con la librería Harmony. URL: https://steamcommunity.com/sharedfiles/filedetails/?id=3544273839',
      features: ['Inyección de código en tiempo de ejecución', 'Implementación de habilidades únicas para colonos', 'Soporte completo para múltiples idiomas'],
      tech: ['C#', 'Harmony Lib', 'XML'],
      repositoryUrl: 'https://github.com/LoP-1/CerebrexNode_TakeControll_Mod',
      imageUrl: 'mod.png'
    },
    {
      id: 8,
      title: 'SafeAlert API',
      type: 'Backend',
      mainTechs: ["spring"],
      description: 'Servicio de backend para la aplicación móvil SafeAlert, gestionando geolocalización en tiempo real.',
      features: ['Almacenamiento persistente de coordenadas', 'API optimizada para mapas interactivos', 'Integridad de datos de usuario'],
      tech: ['Java', 'Spring Boot', 'MySQL', 'JSON'],
      repositoryUrl: 'https://github.com/LoP-1/SafeAlertAPI',
      imageUrl: 'Safe-Alert.png'
    },
    {
      id: 9,
      title: 'Pizza API WEB',
      type: 'Backend',
      mainTechs: ["spring"],
      description: 'Backend para la personalización de pedidos y gestión de menús dinámicos de pizzerías.',
      features: ['Autenticación segura con JWT', 'CRUD completo de productos e ingredientes', 'Gestión de pedidos persistentes'],
      tech: ['Spring Boot', 'MySQL', 'HTML', 'CSS'],
      repositoryUrl: 'https://github.com/LoP-1/PizzaAPI-WEB',
      imageUrl: 'Index.png'
    }
  ];
sortedProjects = computed(() => {
    const list = [...this.projects];
    return list.sort((a, b) => {
      return this.sortOrder() === 'asc' ? a.id - b.id : b.id - a.id;
    });
  });

  selectedProject = signal(this.projects[0]);

  select(project: any) {
    this.selectedProject.set(project);
  }

  toggleSort() {
    this.sortOrder.set(this.sortOrder() === 'asc' ? 'desc' : 'asc');
  }
}