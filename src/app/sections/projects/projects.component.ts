import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectCardComponent } from '../../components/project-card/project-card.component';
import { PORTFOLIO } from '../../data/portfolio.data';
import { ProjectItem } from '../../core/models/portfolio.models';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, ProjectCardComponent],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  all = PORTFOLIO.projects;
  filter = 'All';
  selectedProject?: ProjectItem;
  categories = ['All', 'Enterprise', 'Dashboard', 'Backend', 'Frontend', 'E-commerce', 'Integrations'];
  get items() {
    if (this.filter === 'All') return this.all;
    const query = this.filter.toLowerCase();
    return this.all.filter(p =>
      [p.name, p.category, p.description, p.problem, p.solution, p.technologies.join(' '), p.features.join(' ')]
        .join(' ')
        .toLowerCase()
        .includes(query)
    );
  }

  openCaseStudy(project: ProjectItem): void {
    this.selectedProject = project;
  }

  closeCaseStudy(): void {
    this.selectedProject = undefined;
  }
}
