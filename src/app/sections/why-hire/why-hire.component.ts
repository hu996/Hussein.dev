import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PORTFOLIO } from '../../data/portfolio.data';

@Component({
  selector: 'app-why-hire',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './why-hire.component.html',
  styleUrls: ['./why-hire.component.scss']
})
export class WhyHireComponent {
  items = PORTFOLIO.whyHire;
}
