import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../services/portfolio';
import { Skill } from '../../models/skill';

@Component({
  selector: 'app-skills',
  imports: [CommonModule],
  templateUrl: './skills.html',
  styleUrl: './skills.scss'
})
export class SkillsComponent implements OnInit {
  skillCategories: { name: string; skills: Skill[] }[] = [];

  constructor(private portfolioService: PortfolioService) {}

  ngOnInit() {
    const skills = this.portfolioService.getSkills();
    const categories = ['frontend', 'backend', 'database', 'tools'];
    
    this.skillCategories = categories.map(category => ({
      name: this.getCategoryName(category),
      skills: skills.filter(skill => skill.category === category)
    }));
  }

  getCategoryName(category: string): string {
    const names: { [key: string]: string } = {
      'frontend': 'Frontend',
      'backend': 'Backend',
      'database': 'Base de Datos',
      'tools': 'Herramientas'
    };
    return names[category] || category;
  }

  getSkillPercentage(level: string): number {
    const percentages: { [key: string]: number } = {
      'beginner': 25,
      'intermediate': 50,
      'advanced': 75,
      'expert': 100
    };
    return percentages[level] || 0;
  }
}
