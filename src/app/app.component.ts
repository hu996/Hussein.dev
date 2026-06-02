import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeroComponent } from './sections/hero/hero.component';
import { ProfileComponent } from './sections/profile/profile.component';
import { CoreStrengthsComponent } from './sections/core-strengths/core-strengths.component';
import { ExperienceComponent } from './sections/experience/experience.component';
import { ProjectsComponent } from './sections/projects/projects.component';
import { CapabilitiesComponent } from './sections/capabilities/capabilities.component';
import { TechStackComponent } from './sections/tech-stack/tech-stack.component';
import { ContactComponent } from './sections/contact/contact.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    FooterComponent,
    HeroComponent,
    ProfileComponent,
    CoreStrengthsComponent,
    ExperienceComponent,
    ProjectsComponent,
    CapabilitiesComponent,
    TechStackComponent,
    ContactComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  loading = true;

  ngOnInit(): void {
    if (typeof window !== 'undefined') {
      window.setTimeout(() => (this.loading = false), 850);
    } else {
      this.loading = false;
    }
  }
}
