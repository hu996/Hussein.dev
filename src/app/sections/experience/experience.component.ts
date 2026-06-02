import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExperienceCardComponent } from '../../components/experience-card/experience-card.component';
import { LanguageService } from '../../core/i18n/language.service';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, ExperienceCardComponent],
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent {
  constructor(public i18n: LanguageService) {}

  get items() {
    return this.i18n.portfolio().experience;
  }
}
