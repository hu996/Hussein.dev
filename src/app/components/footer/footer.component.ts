import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../core/i18n/language.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  constructor(public i18n: LanguageService) {}

  year = new Date().getFullYear();

  quickLinks = [
    { id: 'profile', labelKey: 'profile' },
    { id: 'experience', labelKey: 'experience' },
    { id: 'projects', labelKey: 'projects' },
    { id: 'contact', labelKey: 'contact' }
  ];

  get personal() {
    return this.i18n.portfolio().personal;
  }

  scrollToTop(): void {
    if (typeof window === 'undefined') {
      return;
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
