import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../core/i18n/language.service';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  constructor(public i18n: LanguageService) {}

  get data() {
    return this.i18n.portfolio().personal;
  }

  get stats() {
    return this.i18n.portfolio().stats;
  }
}
