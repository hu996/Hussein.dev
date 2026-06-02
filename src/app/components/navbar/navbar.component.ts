import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  isOpen = false;
  isScrolled = false;
  activeSection = 'hero';
  links = [
    { id: 'hero', label: 'Home' },
    { id: 'profile', label: 'Profile' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'capabilities', label: 'Capabilities' },
    { id: 'contact', label: 'Contact' }
  ];

  toggle() { this.isOpen = !this.isOpen; }

  closeMenu() { this.isOpen = false; }

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
