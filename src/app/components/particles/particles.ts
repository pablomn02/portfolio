import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Particle {
  x: number;
  y: number;
  delay: number;
  duration: number;
}

@Component({
  selector: 'app-particles',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './particles.html',
  styleUrl: './particles.scss'
})
export class ParticlesComponent implements OnInit {
  particles: Particle[] = [];

  ngOnInit(): void {
    this.generateParticles();
  }

  private generateParticles(): void {
    const particleCount = 15;
    
    for (let i = 0; i < particleCount; i++) {
      this.particles.push({
        x: Math.random() * 100,
        y: Math.random() * 100,
        delay: Math.random() * 5,
        duration: 8 + Math.random() * 12 // 8-20 seconds
      });
    }
  }
}
