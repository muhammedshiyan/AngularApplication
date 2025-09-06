import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; 

import { HeroSectionComponent } from '../herosection/hero-section.component';
import { AboutSectionComponent } from '../aboutsection/about-section.component';
import { MenuSectionComponent } from '../menusection/menu-section.component';
import { TestimonialsSection } from '../testimonialssection/testimonials-section.component';
import { ContactSectionComponent } from '../contactsection/contact-section.component';
import { FooterComponent } from '../footer/footer.component';
@Component({
  selector: 'app-restaurantlanding',
  standalone: true,                  // ✅ make standalone
  imports: [CommonModule,FooterComponent,  HeroSectionComponent,
    AboutSectionComponent,
    MenuSectionComponent,
    TestimonialsSection,
    ContactSectionComponent,],           // ✅ enable *ngFor
  templateUrl: './restaurentlanding.component.html',
  styleUrls: ['./restaurentlanding.component.css']
})
export class RestaurantLandingComponent implements OnInit {

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