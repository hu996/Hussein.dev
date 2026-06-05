import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../core/i18n/language.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit, OnDestroy {
  techBadges = ['ASP.NET Core', 'Angular', 'SQL Server', 'REST APIs'];
  heroStats = [
    { value: '3+', label: 'Years Experience' },
    { value: '5+', label: 'Enterprise Systems' },
    { value: '20+', label: 'Reports & Dashboards' },
    { value: 'SQL', label: 'Optimization & APIs' }
  ];
  typedText = '';
  private roleIndex = 0;
  private charIndex = 0;
  private deleting = false;
  private timer?: number;

  constructor(public i18n: LanguageService) {}

  get roles() {
    return this.i18n.labels().hero.roles;
  }

  get data() {
    return this.i18n.portfolio().personal;
  }

  get trustedItems(): string[] {
    return [...this.i18n.labels().hero.trusted];
  }

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
