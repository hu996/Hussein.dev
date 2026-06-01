import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillBadgeComponent } from '../../components/skill-badge/skill-badge.component';
import { PORTFOLIO } from '../../data/portfolio.data';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, SkillBadgeComponent],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  skills = PORTFOLIO.skills;
  groups = Object.entries(this.skills).map(([name, items]) => ({ name, items }));
}
