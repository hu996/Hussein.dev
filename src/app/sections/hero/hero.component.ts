import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PORTFOLIO } from '../../data/portfolio.data';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit, OnDestroy {
  data = PORTFOLIO.personal;
  techBadges = ['ASP.NET Core', 'Angular', 'SQL Server', 'RabbitMQ', 'Redis', 'Azure'];
  roles = ['Backend API Developer', 'Angular Frontend Developer', 'Dashboard Builder', 'Enterprise Systems Developer'];
  typedText = '';
  private roleIndex = 0;
  private charIndex = 0;
  private deleting = false;
  private timer?: number;

  ngOnInit(): void {
    if (typeof window !== 'undefined') {
      this.typeLoop();
    } else {
      this.typedText = this.roles[0];
    }
  }

  ngOnDestroy(): void {
    if (typeof window !== 'undefined') {
      window.clearTimeout(this.timer);
    }
  }

  private typeLoop(): void {
    const current = this.roles[this.roleIndex];
    this.typedText = current.slice(0, this.charIndex);

    if (!this.deleting && this.charIndex <= current.length) {
      this.charIndex++;
    } else if (this.deleting && this.charIndex >= 0) {
      this.charIndex--;
    }

    if (this.charIndex > current.length + 8) {
      this.deleting = true;
    }

    if (this.deleting && this.charIndex === 0) {
      this.deleting = false;
      this.roleIndex = (this.roleIndex + 1) % this.roles.length;
    }

    this.timer = window.setTimeout(() => this.typeLoop(), this.deleting ? 42 : 76);
  }
}
