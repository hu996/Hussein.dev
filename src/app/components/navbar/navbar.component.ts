import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../core/i18n/language.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  constructor(public i18n: LanguageService) {}

  isOpen = false;
  isScrolled = false;
  activeSection = 'hero';
  links = [
    { id: 'hero', labelKey: 'home' },
    { id: 'profile', labelKey: 'profile' },
    { id: 'core-strengths', labelKey: 'strengths' },
    { id: 'experience', labelKey: 'experience' },
    { id: 'projects', labelKey: 'projects' },
    { id: 'capabilities', labelKey: 'capabilities' },
    { id: 'contact', labelKey: 'contact' }
  ];

  toggle() { this.isOpen = !this.isOpen; }

  closeMenu() { this.isOpen = false; }

  toggleLanguage(): void {
    this.i18n.toggle();
    this.closeMenu();
  }

  @HostListener('window:scroll')
  onScroll(): void {
    if (typeof window === 'undefined') return;
    this.isScrolled = window.scrollY > 24;
    let current = 'hero';
    for (const link of this.links) {
      const section = document.getElementById(link.id);
      if (section && section.getBoundingClientRect().top <= 140) {
        current = link.id;
      }
    }
    this.activeSection = current;
  }
}
