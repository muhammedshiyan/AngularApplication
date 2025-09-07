import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; 

 import { HeroSectionComponentrestoration } from '../herosectionrestoration/hero-section.component';
 import { AboutSectionComponentrestoration } from '../aboutsectionrestoration/about-section.component';
 import { MenuSectionComponentrestoration } from '../menusectionrestoration/menu-section.component';
 import { TestimonialsSectionrestoration } from '../testimonialssectionrestoration/testimonials-section.component';
 import { ContactSectionComponentrestoration } from '../contactsectionrestoration/contact-section.component';
 import { FooterComponentrestoration } from '../footerrestoration/footer.component';
@Component({
  selector: 'app-landingrestoration',
  standalone: true,                  // ✅ make standalone
  imports: [CommonModule,
      FooterComponentrestoration,
      HeroSectionComponentrestoration,
      AboutSectionComponentrestoration,
      MenuSectionComponentrestoration,
      TestimonialsSectionrestoration,
      ContactSectionComponentrestoration,
  ],           // ✅ enable *ngFor
  templateUrl: './restorationlanding.component.html',
  styleUrls: ['./restorationlanding.component.css']
})
export class LandingComponentrestoration implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}