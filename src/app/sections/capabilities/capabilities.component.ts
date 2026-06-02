import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../core/i18n/language.service';

@Component({
  selector: 'app-capabilities',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './capabilities.component.html',
  styleUrls: ['./capabilities.component.scss']
})
export class CapabilitiesComponent {
  constructor(public i18n: LanguageService) {}

  get capabilities() {
    return this.i18n.portfolio().capabilities;
  }
}
