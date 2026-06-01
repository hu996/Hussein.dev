import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PORTFOLIO } from '../../data/portfolio.data';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  data = PORTFOLIO.personal;
  model = { name: '', email: '', message: '' };
  toast = '';

  async copyEmail(): Promise<void> {
    await navigator.clipboard.writeText(this.data.email);
    this.showToast('Email copied to clipboard');
  }

  submit() {
    this.model = { name: '', email: '', message: '' };
    this.showToast('Message submitted in the frontend preview');
  }

  private showToast(message: string): void {
    this.toast = message;
    window.setTimeout(() => (this.toast = ''), 2400);
  }
}
