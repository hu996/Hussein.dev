import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skill-badge',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skill-badge.component.html',
  styleUrls: ['./skill-badge.component.scss']
})
export class SkillBadgeComponent {
  @Input() label = '';
}
