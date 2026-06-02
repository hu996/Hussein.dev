import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PORTFOLIO } from '../../data/portfolio.data';

@Component({
  selector: 'app-capabilities',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './capabilities.component.html',
  styleUrls: ['./capabilities.component.scss']
})
export class CapabilitiesComponent {
  capabilities = PORTFOLIO.capabilities;
}
