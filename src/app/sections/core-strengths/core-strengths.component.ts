import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../core/i18n/language.service';

@Component({
  selector: 'app-core-strengths',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './core-strengths.component.html',
  styleUrls: ['./core-strengths.component.scss']
})
export class CoreStrengthsComponent {
  constructor(public i18n: LanguageService) {}

  get strengths() {
    return this.i18n.portfolio().strengths;
  }
}
