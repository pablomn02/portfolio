import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../services/portfolio';

@Component({
  selector: 'app-about',
  imports: [CommonModule],
  templateUrl: './about.html',
  styleUrl: './about.scss'
})
export class AboutComponent implements OnInit {
  totalProjects: number = 0;
  totalSkills: number = 0;

  constructor(private portfolioService: PortfolioService) {}

  ngOnInit() {
    this.totalProjects = this.portfolioService.getProjects().length;
    this.totalSkills = this.portfolioService.getSkills().length;
  }
}
