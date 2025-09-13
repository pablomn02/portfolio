import { Injectable } from '@angular/core';
import { Project } from '../models/project';
import { Skill } from '../models/skill';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  constructor() { }

  getProjects(): Project[] {
    return [
      {
        id: 1,
        title: 'Fixer | Contrata fácil, vive mejor',
        description: 'Backend de la aplicación móvil de búsqueda de profesionales mediante geolocalización.',
        technologies: ['Angular', 'Spring Boot', 'MySQL', 'Docker', 'GitHub'],
        imageUrl: 'https://pablomn25.iesmontenaranco.com/assets/images/logo-icono.png',
        githubUrl: 'https://github.com/pablomn02/fixer-apphttps://github.com/pablomn02',
        category: 'backend'
      },
      {
        id: 2,
        title: 'Panaurum | Bateo de Oro',
        description: 'Proyecto intermodular del famoso festival de bateo de oro de Navelgas. Organizado por el IES Monte Naranco',
        technologies: ['Java', 'Spring Boot', 'JWT', 'MySQL', 'GitHub', 'Ionic', 'HTML', 'CSS'],
        imageUrl: 'https://www.turismoasturias.es/o/adaptive-media/image/237177/2/adb5930c-3abc-0958-6671-ca1b4cd1bb47?t=1674191333278',
        githubUrl: 'https://github.com/pablomn02/ecommerce-api',
        category: 'frontend'
      },
      {
        id: 3,
        title: 'Web Scrapping',
        description: 'Dashboard interactivo para visualización de datos con gráficos dinámicos y filtros avanzados.',
        technologies: ['Angular', 'Chart.js', 'TypeScript', 'SCSS'],
        imageUrl: 'https://ionic.io/blog/wp-content/uploads/2024/02/angular-feature-image-1-1024x512.png',
        liveUrl: 'https://pablomn02.github.io/analytics-dashboard',
        category: 'frontend'
      }
    ];
  }

  getSkills(): Skill[] {
    return [
      // Frontend
      { id: 1, name: 'Angular', level: 'advanced', category: 'frontend', icon: 'angular' },
      { id: 2, name: 'TypeScript', level: 'advanced', category: 'frontend', icon: 'typescript' },
      { id: 3, name: 'HTML5', level: 'expert', category: 'frontend', icon: 'html5' },
      { id: 4, name: 'CSS3/SCSS', level: 'advanced', category: 'frontend', icon: 'css3' },
      { id: 5, name: 'JavaScript', level: 'advanced', category: 'frontend', icon: 'javascript' },
      
      // Backend
      { id: 6, name: 'Java', level: 'advanced', category: 'backend', icon: 'java' },
      { id: 7, name: 'Spring Boot', level: 'advanced', category: 'backend', icon: 'spring' },
      { id: 8, name: 'Hibernate', level: 'intermediate', category: 'backend', icon: 'hibernate' },
      { id: 9, name: 'REST APIs', level: 'advanced', category: 'backend', icon: 'api' },
      
      // Database
      { id: 10, name: 'MySQL', level: 'intermediate', category: 'database', icon: 'mysql' },
      { id: 11, name: 'PostgreSQL', level: 'intermediate', category: 'database', icon: 'postgresql' },
      
      // Tools
      { id: 12, name: 'Docker', level: 'intermediate', category: 'tools', icon: 'docker' },
      { id: 13, name: 'Git', level: 'advanced', category: 'tools', icon: 'git' },
      { id: 14, name: 'GitHub', level: 'advanced', category: 'tools', icon: 'github' }
    ];
  }

  getPersonalInfo() {
    return {
      name: 'Pablo Menéndez Navarro',
      title: 'Desarrollador Full Stack',
      email: 'pablomnavarro9@gmail.com',
      linkedin: 'https://www.linkedin.com/in/pablomn02',
      github: 'https://github.com/pablomn02',
      location: 'España',
      bio: 'Desarrollador apasionado por crear soluciones tecnológicas innovadoras. Especializado en desarrollo backend con Java/Spring Boot y frontend con Angular. Siempre aprendiendo nuevas tecnologías y mejorando mis habilidades.'
    };
  }
}
