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
        description: 'App móvil de búsqueda de profesionales mediante geolocalización.',
        detailedDescription: 'Fixer es una aplicación que conecta usuarios con profesionales de servicios mediante geolocalización. Como unico desarrollador de este proyecto, fui responsable de crear una API REST robusta que manejara la autenticación, geolocalización en tiempo real, y gestión de citas. El sistema utiliza algoritmos de búsqueda por proximidad para encontrar los profesionales más cercanos y disponibles.',
        technologies: ['Spring Boot', 'MySQL', 'JWT', 'Docker', 'REST API', 'Ionic', 'Angular'],
        imageUrl: 'https://wecozyatelier.com/wp-content/uploads/2025/09/logo-icono.png',
        githubUrl: 'https://github.com/pablomn02',
        liveUrl: 'https://pablomn25.iesmontenaranco.com',
        category: 'fullstack',
        features: [
          'Sistema de autenticación JWT seguro',
          'API de geolocalización en tiempo real',
          'Búsqueda por proximidad',
          'Sistema de gestión de citas',
          'Panel de administración completo'
        ],
        duration: '3 meses',
        gallery: [
          'https://pablomn25.iesmontenaranco.com/assets/images/logo-icono.png',
          'https://ionic.io/blog/wp-content/uploads/2024/02/angular-feature-image-1-1024x512.png'
        ]
      },
      {
        id: 2,
        title: 'Panaurum',
        description: 'Proyecto intermodular del festival de bateo de oro de Navelgas. Organizado por el IES Monte Naranco',
        detailedDescription: 'Panaurum es un proyecto intermodular desarrollado para el festival de bateo de oro de Navelgas. Como desarrollador full stack, creé una aplicación web completa que incluye un sistema de gestión de eventos, registro de participantes, y una plataforma de e-commerce para la venta de productos relacionados con el festival. El proyecto integra múltiples tecnologías para crear una experiencia digital completa.',
        technologies: ['Java', 'Spring Boot', 'JWT', 'MySQL', 'Ionic', 'Angular', 'HTML', 'CSS', 'TypeScript'],
        imageUrl: 'https://ionic.io/blog/wp-content/uploads/2024/02/angular-feature-image-1-1024x512.png',
        githubUrl: 'https://github.com/pablomn02/ecommerce-api',
        category: 'fullstack',
        features: [
          'Sistema de gestión de eventos y participantes',
          'Aplicación móvil híbrida con Ionic',
          'Colaboracion con un equipo de 4 personas'
        ],
        duration: '3 semanas',
        gallery: [
          'https://ionic.io/blog/wp-content/uploads/2024/02/angular-feature-image-1-1024x512.png',
          'https://pablomn25.iesmontenaranco.com/assets/images/logo-icono.png'
        ]
      },
      {
        id: 3,
        title: 'WECOZY',
        description: 'Página web corporativa para WECOZY diseñada con WordPress',
        detailedDescription: 'WECOZY es una página web corporativa desarrollada con WordPress que presenta los servicios de diseño y atelier de la empresa. El proyecto incluye un diseño moderno y responsive, optimización SEO, integración de formularios de contacto, galería de trabajos, y un sistema de gestión de contenido fácil de usar para el cliente. La web está optimizada para conversión y experiencia de usuario.',
        technologies: ['WordPress', 'PHP', 'HTML5', 'CSS3', 'JavaScript', 'MySQL', 'SEO', 'Responsive Design'],
        imageUrl: 'https://wecozyatelier.com/wp-content/uploads/2025/07/Ilustracion_sin_titulo-9.jpg',
        liveUrl: 'https://wecozyatelier.com',
        category: 'frontend',
        features: [
          'Diseño responsive y moderno',
          'Configuracion de pasarela de pago con WooCommerce',
          'Sistema de gestión de contenido WordPress',
          'Formularios de contacto integrados',
          'Optimización SEO',
          'Integración con redes sociales',
        ],
        duration: 'En constante actualización',
        gallery: [
          'https://wecozyatelier.com/wp-content/uploads/2024/10/WhatsApp-Image-2024-10-15-at-20.17.20-1-1-scaled.jpeg',
          'https://wecozyatelier.com/wp-content/uploads/2024/10/WhatsApp-Image-2024-10-15-at-20.17.19-1-2-scaled.jpeg',
          'https://wecozyatelier.com/wp-content/uploads/2025/04/IMG-20250522-WA0036-scaled.jpg'
        ]
      },
      {
        id: 4,
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
        duration: '3 días',
        gallery: [
          'https://media.licdn.com/dms/image/v2/D5612AQFMxThwQn7HZg/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1697274440798?e=2147483647&v=beta&t=QLEHZgio8uRKebsNCrjEdh3rOvVmSUa7dSYgzCPBxBo'
        ]
      },
      {
        id: 5,
        title: 'ToDo App',
        description: 'Aplicación web de gestión de tareas desarrollada con Angular.',
        detailedDescription: 'ToDoApp es una aplicación web moderna para la gestión de tareas personales y profesionales. Desarrollada con Angular, TypeScript y SCSS, ofrece una interfaz intuitiva y responsive para crear, editar, completar y eliminar tareas. La aplicación incluye funcionalidades como filtrado por estado, búsqueda de tareas, y una experiencia de usuario optimizada para la productividad.',
        technologies: ['Angular', 'TypeScript', 'SCSS', 'HTML5', 'CSS3', 'JavaScript'],
        imageUrl: 'https://ionic.io/blog/wp-content/uploads/2024/02/angular-feature-image-1-1024x512.png',
        githubUrl: 'https://github.com/pablomn02/todoapp',
        category: 'frontend',
        features: [
          'Crear, editar y eliminar tareas',
          'Marcar tareas como completadas',
          'Interfaz responsive y moderna',
          'Filtrado y búsqueda de tareas',
          'Persistencia de datos local',
          'Diseño limpio y minimalista'
        ],
        duration: '1 semana',
        gallery: [
          'https://via.placeholder.com/800x400/4f46e5/ffffff?text=ToDo+App+Main+View',
          'https://via.placeholder.com/800x400/6366f1/ffffff?text=Task+Management'
        ]
      }

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
