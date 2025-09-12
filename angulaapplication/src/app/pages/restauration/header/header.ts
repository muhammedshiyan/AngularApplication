// components/header/header.component.ts
import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  isScrolled = false;
  isMobileMenuOpen = false;

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    this.isScrolled = window.pageYOffset > 50;
  }

  @HostListener('window:resize', [])
  onWindowResize(): void {
    // Close mobile menu on resize to desktop
    if (window.innerWidth > 768) {
      this.isMobileMenuOpen = false;
    }
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeMenu(): void {
    this.isMobileMenuOpen = false;
  }

  onBookService(): void {
    // Navigate to booking section or open modal
    document.querySelector('#contact')?.scrollIntoView({ 
      behavior: 'smooth' 
    });
  }

  onCallNow(): void {
    // Track call button click for analytics if needed
    console.log('Call button clicked');
  }
}