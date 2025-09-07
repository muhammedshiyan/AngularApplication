import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { FormsModule } from '@angular/forms';

interface SocialLink {
  name: string;
  icon: string;
  url: string;
}

interface FooterLink {
  name: string;
  url: string;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

@Component({
  selector: 'app-footerrestoration',
    standalone: true,                  // ✅ make standalone
  imports: [CommonModule,FormsModule],           // ✅ enable *ngFor
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponentrestoration implements OnInit {
  currentYear = new Date().getFullYear();
  
  socialLinks: SocialLink[] = [
    { name: 'Facebook', icon: '📘', url: 'https://facebook.com/bellavista' },
    { name: 'Instagram', icon: '📷', url: 'https://instagram.com/bellavista' },
    { name: 'Twitter', icon: '🐦', url: 'https://twitter.com/bellavista' },
    { name: 'TikTok', icon: '🎵', url: 'https://tiktok.com/@bellavista' },
    { name: 'YouTube', icon: '📺', url: 'https://youtube.com/bellavista' }
  ];

  footerSections: FooterSection[] = [
    {
      title: 'Quick Links',
      links: [
        { name: 'Home', url: '#hero' },
        { name: 'About Us', url: '#about' },
        { name: 'Our Menu', url: '#menu' },
        { name: 'Reservations', url: '#contact' },
        { name: 'Contact', url: '#contact' }
      ]
    },
    {
      title: 'Services',
      links: [
        { name: 'Dine In', url: '#' },
        { name: 'Takeaway', url: '#' },
        { name: 'Delivery', url: '#' },
        { name: 'Catering', url: '#' },
        { name: 'Private Events', url: '#' }
      ]
    },
    {
      title: 'Information',
      links: [
        { name: 'Our Story', url: '#about' },
        { name: 'Chef\'s Special', url: '#menu' },
        { name: 'Wine Selection', url: '#' },
        { name: 'Gift Cards', url: '#' },
        { name: 'Careers', url: '#' }
      ]
    },
    {
      title: 'Support',
      links: [
        { name: 'FAQ', url: '#' },
        { name: 'Privacy Policy', url: '#' },
        { name: 'Terms of Service', url: '#' },
        { name: 'Customer Support', url: '#contact' },
        { name: 'Feedback', url: '#contact' }
      ]
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  subscribeNewsletter(email: string): void {
    if (email && email.includes('@')) {
      console.log('Newsletter subscription:', email);
      // Implement newsletter subscription logic
    }
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}