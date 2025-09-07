import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; 
@Component({
  selector: 'app-herosectionrestoration',
  standalone: true,                  // ✅ make standalone
  imports: [CommonModule],           // ✅ enable *ngFor
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.css']
})
export class HeroSectionComponentrestoration implements OnInit {
  isMenuOpen = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    this.isMenuOpen = false;
  }

  makeReservation(): void {
    // Implement reservation logic or redirect
    console.log('Making reservation...');
  }
}