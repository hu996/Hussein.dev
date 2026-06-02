import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectItem } from '../../core/models/portfolio.models';
import { LanguageService } from '../../core/i18n/language.service';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent {
  constructor(public i18n: LanguageService) {}

  @Input({ required: true }) project!: ProjectItem;
  @Output() caseStudy = new EventEmitter<void>();
}
