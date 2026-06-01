import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PORTFOLIO } from '../../data/portfolio.data';

@Component({
  selector: 'app-saudi-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './saudi-experience.component.html',
  styleUrls: ['./saudi-experience.component.scss']
})
export class SaudiExperienceComponent {
  companies = PORTFOLIO.experience.filter(item => ['Oasis Computer Systems', 'Sada'].includes(item.company));
  clientTypes = ['Saudi enterprise clients', 'Business operation teams', 'Internal systems', 'Digital transformation departments', 'Private sector companies'];
}
