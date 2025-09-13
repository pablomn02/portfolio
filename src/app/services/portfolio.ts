import { Injectable } from '@angular/core';
import { Project } from '../models/project';
import { Skill } from '../models/skill';
import { LinkedInPost } from '../models/linkedin-post';

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
        challenges: [
          'Optimizar consultas de geolocalización para grandes volúmenes de datos',
          'Implementar autenticación segura sin comprometer la experiencia del usuario',
          'Manejar la concurrencia en el sistema de citas',
          'Integrar múltiples servicios de geolocalización'
        ],
        solutions: [
          'Implementé índices espaciales en MySQL para consultas geoeficientes',
          'Desarrollé un sistema de tokens JWT con refresh automático',
          'Utilicé transacciones de base de datos para garantizar consistencia',
          'Creé una capa de abstracción para diferentes proveedores de geolocalización'
        ],
        duration: '6 meses',
        teamSize: 3,
        myRole: 'Desarrollador Backend Lead',
        gallery: [
          'https://pablomn25.iesmontenaranco.com/assets/images/logo-icono.png',
          'https://ionic.io/blog/wp-content/uploads/2024/02/angular-feature-image-1-1024x512.png'
        ],
        lessonsLearned: [
          'La importancia de diseñar APIs escalables desde el inicio',
          'Cómo optimizar consultas de geolocalización en bases de datos relacionales',
          'Mejores prácticas para autenticación en aplicaciones móviles',
          'Gestión de equipos y coordinación entre frontend y backend'
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
        challenges: [
          'Integrar múltiples módulos del proyecto de forma cohesiva',
          'Desarrollar una aplicación móvil que funcione en diferentes dispositivos',
          'Implementar un sistema de pagos seguro y confiable',
          'Manejar la alta concurrencia durante el festival'
        ],
        solutions: [
          'Diseñé una arquitectura modular con APIs bien definidas',
          'Utilicé Ionic para crear una aplicación híbrida multiplataforma',
          'Integré Stripe para el procesamiento de pagos seguros',
          'Implementé caching y optimizaciones de base de datos'
        ],
        duration: '8 meses',
        teamSize: 5,
        myRole: 'Desarrollador Full Stack',
        gallery: [
          'https://ionic.io/blog/wp-content/uploads/2024/02/angular-feature-image-1-1024x512.png',
          'https://pablomn25.iesmontenaranco.com/assets/images/logo-icono.png'
        ],
        lessonsLearned: [
          'Cómo coordinar equipos multidisciplinarios en proyectos complejos',
          'La importancia de la planificación en proyectos de larga duración',
          'Mejores prácticas para desarrollo de aplicaciones híbridas',
          'Integración de sistemas de pago en aplicaciones web'
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
        challenges: [
          'Evitar la detección y bloqueo por parte de Amazon',
          'Manejar la estructura dinámica de las páginas web',
          'Optimizar el rendimiento del scraping',
          'Mantener la integridad de los datos extraídos'
        ],
        solutions: [
          'Implementé rotación de user agents y delays aleatorios',
          'Desarrollé selectores CSS robustos y adaptativos',
          'Utilicé workers para paralelizar el proceso de scraping',
          'Creé un sistema de validación y limpieza de datos'
        ],
        duration: '3 meses',
        teamSize: 1,
        myRole: 'Desarrollador Full Stack',
        gallery: [
          'https://media.licdn.com/dms/image/v2/D5612AQFMxThwQn7HZg/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1697274440798?e=2147483647&v=beta&t=QLEHZgio8uRKebsNCrjEdh3rOvVmSUa7dSYgzCPBxBo'
        ],
        lessonsLearned: [
          'Cómo desarrollar aplicaciones de scraping éticas y responsables',
          'Técnicas para evitar la detección en web scraping',
          'Optimización de rendimiento en aplicaciones Node.js',
          'Manejo de datos no estructurados y limpieza de datos'
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

  getLinkedInPosts(): LinkedInPost[] {
    return [
      {
        id: 1,
        title: 'Mi experiencia con Angular 17 y las nuevas características',
        content: 'He estado trabajando con Angular 17 y me ha impresionado mucho las mejoras en performance y la nueva sintaxis de control flow. En este post comparto mis experiencias y mejores prácticas.',
        excerpt: 'Angular 17 trae consigo mejoras significativas en performance y una nueva sintaxis de control flow que simplifica mucho el desarrollo...',
        imageUrl: 'https://angular.io/generated/images/marketing/home/responsive-framework.svg',
        publishedDate: new Date('2024-01-15'),
        linkedinUrl: 'https://www.linkedin.com/posts/pablomn02_angular17-frontend-development-activity-1234567890',
        likes: 45,
        comments: 12,
        shares: 8,
        tags: ['Angular', 'Frontend', 'JavaScript', 'TypeScript'],
        category: 'tech'
      },
      {
        id: 2,
        title: 'De estudiante a desarrollador: mi transición profesional',
        content: 'Comparto mi experiencia personal sobre cómo pasé de ser estudiante a convertirme en desarrollador full stack, los desafíos que enfrenté y las lecciones aprendidas.',
        excerpt: 'La transición de estudiante a desarrollador profesional no siempre es fácil. Aquí comparto mi experiencia y los consejos que me hubiera gustado recibir...',
        publishedDate: new Date('2024-01-08'),
        linkedinUrl: 'https://www.linkedin.com/posts/pablomn02_career-development-programming-activity-1234567891',
        likes: 78,
        comments: 23,
        shares: 15,
        tags: ['Carrera', 'Desarrollo', 'Experiencia', 'Consejos'],
        category: 'career'
      },
      {
        id: 3,
        title: 'Proyecto Fixer: Backend con Spring Boot y geolocalización',
        content: 'Presento mi proyecto Fixer, una aplicación móvil para búsqueda de profesionales mediante geolocalización. Detallo la arquitectura del backend y las tecnologías utilizadas.',
        excerpt: 'Fixer es una aplicación que conecta usuarios con profesionales de servicios mediante geolocalización. En este post explico la arquitectura del backend...',
        imageUrl: 'https://pablomn25.iesmontenaranco.com/assets/images/logo-icono.png',
        publishedDate: new Date('2024-01-02'),
        linkedinUrl: 'https://www.linkedin.com/posts/pablomn02_springboot-backend-geolocation-activity-1234567892',
        likes: 92,
        comments: 18,
        shares: 22,
        tags: ['Spring Boot', 'Backend', 'Geolocalización', 'API REST'],
        category: 'project'
      },
      {
        id: 4,
        title: 'Aprendiendo Docker: Containerización de aplicaciones',
        content: 'Comparto mi proceso de aprendizaje con Docker y cómo he implementado la containerización en mis proyectos. Incluyo ejemplos prácticos y mejores prácticas.',
        excerpt: 'Docker ha revolucionado la forma en que desarrollo y despliego aplicaciones. Aquí comparto mi experiencia aprendiendo esta tecnología...',
        publishedDate: new Date('2023-12-28'),
        linkedinUrl: 'https://www.linkedin.com/posts/pablomn02_docker-containerization-devops-activity-1234567893',
        likes: 56,
        comments: 14,
        shares: 9,
        tags: ['Docker', 'DevOps', 'Containerización', 'Aprendizaje'],
        category: 'learning'
      },
      {
        id: 5,
        title: 'La importancia de la documentación en el desarrollo de software',
        content: 'Reflexiono sobre la importancia de mantener una buena documentación en los proyectos de software y cómo esto impacta en la productividad del equipo.',
        excerpt: 'La documentación es una parte fundamental del desarrollo de software que a menudo se subestima. Aquí mis reflexiones sobre su importancia...',
        publishedDate: new Date('2023-12-20'),
        linkedinUrl: 'https://www.linkedin.com/posts/pablomn02_documentation-software-development-activity-1234567894',
        likes: 67,
        comments: 19,
        shares: 11,
        tags: ['Documentación', 'Desarrollo', 'Productividad', 'Mejores Prácticas'],
        category: 'thoughts'
      },
      {
        id: 6,
        title: 'Implementando JWT en Spring Boot: Guía práctica',
        content: 'Guía paso a paso para implementar autenticación JWT en Spring Boot, incluyendo configuración de seguridad y manejo de tokens.',
        excerpt: 'JWT es una excelente opción para autenticación en APIs REST. En esta guía te muestro cómo implementarlo en Spring Boot...',
        publishedDate: new Date('2023-12-15'),
        linkedinUrl: 'https://www.linkedin.com/posts/pablomn02_springboot-jwt-authentication-activity-1234567895',
        likes: 89,
        comments: 25,
        shares: 17,
        tags: ['Spring Boot', 'JWT', 'Autenticación', 'Seguridad'],
        category: 'tech'
      }
    ];
  }
}
