import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PortfolioService } from '../../services/portfolio';
import { Project } from '../../models/project';

@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterModule],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class HomeComponent implements OnInit {
  featuredProjects: Project[] = [];

  constructor(private portfolioService: PortfolioService) {}

  ngOnInit() {
    this.featuredProjects = this.portfolioService.getProjects().slice(0, 3);
  }
}
