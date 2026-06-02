import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { LanguageService } from '../../core/i18n/language.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  // Paste your deployed Google Apps Script Web App URL here.
  // Deploy settings: Execute as "Me", Who has access "Anyone".
  private readonly googleScriptUrl = 'PUT_YOUR_GOOGLE_SCRIPT_URL_HERE';

  constructor(public i18n: LanguageService) {}

  get data() {
    return this.i18n.portfolio().personal;
  }

  model = { name: '', email: '', message: '', website: '' };
  statusMessage = '';
  statusType: 'success' | 'error' | '' = '';
  isSending = false;

  async copyEmail(): Promise<void> {
    await navigator.clipboard.writeText(this.data.email);
    this.showStatus(this.i18n.labels().contact.copied, 'success');
  }

  async submit(form: NgForm): Promise<void> {
    this.clearStatus();

    if (this.isSending) {
      return;
    }

    if (this.model.website) {
      this.showStatus(this.i18n.labels().contact.success, 'success');
      form.resetForm({ name: '', email: '', message: '', website: '' });
      return;
    }

    if (form.invalid || this.model.message.trim().length < 10) {
      form.control.markAllAsTouched();
      this.showStatus(this.i18n.labels().contact.validationError, 'error');
      return;
    }

    if (!this.googleScriptUrl || this.googleScriptUrl === 'PUT_YOUR_GOOGLE_SCRIPT_URL_HERE') {
      this.showStatus(this.i18n.labels().contact.configError, 'error');
      return;
    }

    this.isSending = true;

    const payload = new FormData();
    payload.append('name', this.model.name.trim());
    payload.append('email', this.model.email.trim());
    payload.append('message', this.model.message.trim());
    payload.append('pageUrl', typeof window !== 'undefined' ? window.location.href : '');
    payload.append('createdAt', new Date().toISOString());
    payload.append('userAgent', typeof navigator !== 'undefined' ? navigator.userAgent : '');

    try {
      await fetch(this.googleScriptUrl, {
        method: 'POST',
        body: payload,
        // Google Apps Script Web Apps often reject readable browser responses via CORS.
        // no-cors sends the data, but returns an opaque response, so completion is treated
        // as success unless the network request itself fails.
        mode: 'no-cors'
      });

      form.resetForm({ name: '', email: '', message: '', website: '' });
      this.showStatus(this.i18n.labels().contact.success, 'success');
    } catch {
      this.showStatus(this.i18n.labels().contact.requestError, 'error');
    } finally {
      this.isSending = false;
    }
  }

  private showStatus(message: string, type: 'success' | 'error'): void {
    this.statusMessage = message;
    this.statusType = type;
  }

  private clearStatus(): void {
    this.statusMessage = '';
    this.statusType = '';
  }
}
