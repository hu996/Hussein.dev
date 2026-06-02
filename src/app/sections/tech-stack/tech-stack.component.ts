import { Component } from '@angular/core';
import { LanguageService } from '../../core/i18n/language.service';

@Component({
  selector: 'app-tech-stack',
  standalone: true,
  templateUrl: './tech-stack.component.html',
  styleUrls: ['./tech-stack.component.scss']
})
export class TechStackComponent {
  constructor(public i18n: LanguageService) {}

  get stack() {
    return this.i18n.portfolio().techStack;
  }
  
  categories() {
    return Object.entries(this.stack);
  }
}

