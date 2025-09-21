import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PortfolioService } from '../../services/portfolio';
import { Project } from '../../models/project';
import { WavesComponent } from '../../components/waves/waves';

@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterModule, WavesComponent],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class HomeComponent implements OnInit {
  featuredProjects: Project[] = [];
  totalProjects: number = 0;
  totalSkills: number = 0;

  constructor(private portfolioService: PortfolioService) {}

  ngOnInit() {
    this.featuredProjects = this.portfolioService.getProjects().slice(0, 3);
    this.totalProjects = this.portfolioService.getProjects().length;
    this.totalSkills = this.portfolioService.getSkills().length;
  }
}
