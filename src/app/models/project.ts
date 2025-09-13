export interface Project {
  id: number;
  title: string;
  description: string;
  detailedDescription: string;
  technologies: string[];
  imageUrl: string;
  githubUrl?: string;
  liveUrl?: string;
  category: 'frontend' | 'backend' | 'fullstack';
  features: string[];
  challenges: string[];
  solutions: string[];
  duration: string;
  teamSize: number;
  myRole: string;
  gallery: string[];
  lessonsLearned: string[];
}
