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
        title: 'Fixer',
        description: 'Backend de la aplicación móvil de búsqueda de profesionales mediante geolocalización.',
        detailedDescription: 'Fixer es una aplicación innovadora que conecta usuarios con profesionales de servicios mediante geolocalización. Como desarrollador backend, fui responsable de crear una API REST robusta que maneja la autenticación, geolocalización en tiempo real, y gestión de citas. El sistema utiliza algoritmos de búsqueda por proximidad para encontrar los profesionales más cercanos y disponibles.',
        technologies: ['Spring Boot', 'MySQL', 'JWT', 'Docker', 'GitHub Actions', 'REST API'],
        imageUrl: 'https://pablomn25.iesmontenaranco.com/assets/images/logo-icono.png',
        githubUrl: 'https://github.com/pablomn02/fixer-app',
        category: 'backend',
        features: [
          'Sistema de autenticación JWT seguro',
          'API de geolocalización en tiempo real',
          'Algoritmo de búsqueda por proximidad',
          'Sistema de gestión de citas',
          'Notificaciones push integradas',
          'Panel de administración completo'
        ],
        duration: '6 meses',
        gallery: [
          'https://pablomn25.iesmontenaranco.com/assets/images/logo-icono.png',
          'https://ionic.io/blog/wp-content/uploads/2024/02/angular-feature-image-1-1024x512.png'
        ]
      },
      {
        id: 2,
        title: 'Panaurum',
        description: 'Proyecto intermodular del famoso festival de bateo de oro de Navelgas. Organizado por el IES Monte Naranco',
        detailedDescription: 'Panaurum es un proyecto intermodular desarrollado para el festival de bateo de oro de Navelgas. Como desarrollador full stack, creé una aplicación web completa que incluye un sistema de gestión de eventos, registro de participantes, y una plataforma de e-commerce para la venta de productos relacionados con el festival. El proyecto integra múltiples tecnologías para crear una experiencia digital completa.',
        technologies: ['Java', 'Spring Boot', 'JWT', 'MySQL', 'Ionic', 'Angular', 'HTML', 'CSS', 'TypeScript'],
        imageUrl: 'https://ionic.io/blog/wp-content/uploads/2024/02/angular-feature-image-1-1024x512.png',
        githubUrl: 'https://github.com/pablomn02/ecommerce-api',
        category: 'fullstack',
        features: [
          'Sistema de gestión de eventos y participantes',
          'Plataforma de e-commerce integrada',
          'Aplicación móvil híbrida con Ionic',
          'Panel de administración web',
          'Sistema de pagos online',
          'Gestión de inventario en tiempo real'
        ],
        duration: '8 meses',
        gallery: [
          'https://ionic.io/blog/wp-content/uploads/2024/02/angular-feature-image-1-1024x512.png',
          'https://pablomn25.iesmontenaranco.com/assets/images/logo-icono.png'
        ]
      },
      {
        id: 3,
        title: 'Web Scraping',
        description: 'Página web de scraping de datos de productos de Amazon',
        detailedDescription: 'Desarrollé una aplicación web de scraping que extrae información de productos de Amazon de manera automatizada. El proyecto incluye una interfaz web intuitiva para configurar las búsquedas, un sistema de scraping robusto que respeta los límites de la plataforma, y una base de datos para almacenar y analizar los datos extraídos. La aplicación permite a los usuarios realizar análisis de precios y tendencias del mercado.',
        technologies: ['JavaScript', 'Node.js', 'Puppeteer', 'HTML', 'CSS', 'MongoDB', 'Express'],
        imageUrl: 'https://media.licdn.com/dms/image/v2/D5612AQFMxThwQn7HZg/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1697274440798?e=2147483647&v=beta&t=QLEHZgio8uRKebsNCrjEdh3rOvVmSUa7dSYgzCPBxBo',
        githubUrl: 'https://github.com/pablomn02/web-scraping',
        category: 'frontend',
        features: [
          'Interfaz web para configurar búsquedas de productos',
          'Sistema de scraping automatizado con Puppeteer',
          'Base de datos para almacenar datos extraídos',
          'Análisis de precios y tendencias',
          'Exportación de datos en múltiples formatos',
          'Sistema de notificaciones por email'
        ],
        duration: '3 meses',
        gallery: [
          'https://media.licdn.com/dms/image/v2/D5612AQFMxThwQn7HZg/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1697274440798?e=2147483647&v=beta&t=QLEHZgio8uRKebsNCrjEdh3rOvVmSUa7dSYgzCPBxBo'
        ]
      },
      {
        id: 4,
        title: 'WECOZY',
        description: 'Página web corporativa para WECOZY diseñada con WordPress',
        detailedDescription: 'WECOZY es una página web corporativa desarrollada con WordPress que presenta los servicios de diseño y atelier de la empresa. El proyecto incluye un diseño moderno y responsive, optimización SEO, integración de formularios de contacto, galería de trabajos, y un sistema de gestión de contenido fácil de usar para el cliente. La web está optimizada para conversión y experiencia de usuario.',
        technologies: ['WordPress', 'PHP', 'HTML5', 'CSS3', 'JavaScript', 'MySQL', 'SEO', 'Responsive Design'],
        imageUrl: 'https://wecozyatelier.com/wp-content/uploads/2025/07/Ilustracion_sin_titulo-9.jpg',
        liveUrl: 'https://wecozyatelier.com',
        category: 'frontend',
        features: [
          'Diseño responsive y moderno',
          'Sistema de gestión de contenido WordPress',
          'Galería de trabajos y portfolio',
          'Formularios de contacto integrados',
          'Optimización SEO completa',
          'Integración con redes sociales',
          'Sistema de reservas online',
          'Blog integrado para contenido'
        ],
        duration: '2 meses',
        gallery: [
          'https://wecozyatelier.com/wp-content/uploads/2024/10/WhatsApp-Image-2024-10-15-at-20.17.20-1-1-scaled.jpeg',
          'https://wecozyatelier.com/wp-content/uploads/2024/10/WhatsApp-Image-2024-10-15-at-20.17.19-1-2-scaled.jpeg',
          'https://wecozyatelier.com/wp-content/uploads/2025/04/IMG-20250522-WA0036-scaled.jpg'
        ]
      },

    ];
  }

  getProjectById(id: number): Project | undefined {
    return this.getProjects().find(project => project.id === id);
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
