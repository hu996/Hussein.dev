import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PORTFOLIO } from '../../data/portfolio.data';

@Component({
  selector: 'app-core-strengths',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './core-strengths.component.html',
  styleUrls: ['./core-strengths.component.scss']
})
export class CoreStrengthsComponent {
  strengths = PORTFOLIO.strengths;
}
