import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeroComponent } from './sections/hero/hero.component';
import { StatsComponent } from './sections/stats/stats.component';
import { AboutComponent } from './sections/about/about.component';
import { ExperienceComponent } from './sections/experience/experience.component';
import { SaudiExperienceComponent } from './sections/saudi-experience/saudi-experience.component';
import { ProjectsComponent } from './sections/projects/projects.component';
import { SkillsComponent } from './sections/skills/skills.component';
import { ServicesComponent } from './sections/services/services.component';
import { ClientsComponent } from './sections/clients/clients.component';
import { TestimonialsComponent } from './sections/testimonials/testimonials.component';
import { WhyHireComponent } from './sections/why-hire/why-hire.component';
import { ContactComponent } from './sections/contact/contact.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, NavbarComponent, FooterComponent, HeroComponent, StatsComponent, AboutComponent, ExperienceComponent, SaudiExperienceComponent, ProjectsComponent, SkillsComponent, ServicesComponent, ClientsComponent, TestimonialsComponent, WhyHireComponent, ContactComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  loading = true;

  ngOnInit(): void {
    if (typeof window !== 'undefined') {
      window.setTimeout(() => (this.loading = false), 850);
    } else {
      this.loading = false;
    }
  }
}
