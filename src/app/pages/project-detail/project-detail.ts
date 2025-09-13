import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute, Router } from '@angular/router';
import { PortfolioService } from '../../services/portfolio';
import { Project } from '../../models/project';

@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './project-detail.html',
  styleUrl: './project-detail.scss'
})
export class ProjectDetailComponent implements OnInit {
  project: Project | undefined;
  currentImageIndex = 0;

  constructor(
    private portfolioService: PortfolioService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const projectId = +params['id'];
      this.project = this.portfolioService.getProjectById(projectId);
      
      if (!this.project) {
        this.router.navigate(['/projects']);
      }
    });
  }

  nextImage(): void {
    if (this.project && this.project.gallery.length > 0) {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.project.gallery.length;
    }
  }

  previousImage(): void {
    if (this.project && this.project.gallery.length > 0) {
      this.currentImageIndex = this.currentImageIndex === 0 
        ? this.project.gallery.length - 1 
        : this.currentImageIndex - 1;
    }
  }

  goBack(): void {
    this.router.navigate(['/projects']);
  }
}
