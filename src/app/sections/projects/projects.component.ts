import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectCardComponent } from '../../components/project-card/project-card.component';
import { ProjectItem } from '../../core/models/portfolio.models';
import { LanguageService } from '../../core/i18n/language.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, ProjectCardComponent],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  filterIndex = 0;
  selectedProject?: ProjectItem;

  constructor(public i18n: LanguageService) {}

  get all() {
    return this.i18n.portfolio().projects;
  }

  get categories() {
    return this.i18n.labels().projects.filters;
  }

  get items() {
    if (this.filterIndex === 0) return this.all;
    const localizedFilter = this.categories[this.filterIndex].toLowerCase();
    const englishFilter = ['All', 'Enterprise', 'Dashboard', 'Backend', 'Frontend', 'E-commerce', 'Integrations'][this.filterIndex].toLowerCase();
    return this.all.filter(p =>
      [p.name, p.category, p.description, p.problem, p.solution, p.technologies.join(' '), p.features.join(' ')]
        .join(' ')
        .toLowerCase()
        .includes(localizedFilter) ||
      [p.name, p.category, p.description, p.problem, p.solution, p.technologies.join(' '), p.features.join(' ')]
        .join(' ')
        .toLowerCase()
        .includes(englishFilter)
    );
  }

  openCaseStudy(project: ProjectItem): void {
    this.selectedProject = project;
  }

  closeCaseStudy(): void {
    this.selectedProject = undefined;
  }
}
