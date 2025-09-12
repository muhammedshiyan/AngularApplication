// components/testimonials/testimonials.component.ts
import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Testimonial {
  id: number;
  name: string;
  position?: string;
  company?: string;
  avatar: string;
  rating: number;
  review: string;
  service: string;
  date: string;
  location?: string;
  verified: boolean;
}

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonials.html',
  styleUrl: './testimonials.css'
})
export class Testimonials implements OnInit, OnDestroy {
  // Testimonials data
  testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Michael Johnson',
      position: 'Business Owner',
      company: 'Johnson Enterprises',
      avatar: 'assets/images/avatars/michael-j.jpg',
      rating: 5,
      review: 'Absolutely incredible service! My BMW looked brand new after their paint correction and ceramic coating. The attention to detail is phenomenal, and the staff is extremely professional. Worth every penny!',
      service: 'Paint Correction & Ceramic Coating',
      date: '2024-01-15',
      location: 'Downtown',
      verified: true
    },
    {
      id: 2,
      name: 'Sarah Chen',
      position: 'Marketing Director',
      company: 'TechFlow Inc',
      avatar: 'assets/images/avatars/sarah-c.jpg',
      rating: 5,
      review: 'I\'ve been using AutoLux for over 2 years now, and they never disappoint. My Mercedes always looks stunning after their premium detailing service. Highly recommend for luxury car owners!',
      service: 'Premium Interior & Exterior Detail',
      date: '2024-01-10',
      location: 'Westside',
      verified: true
    },
    {
      id: 3,
      name: 'David Rodriguez',
      position: 'Real Estate Agent',
      avatar: 'assets/images/avatars/david-r.jpg',
      rating: 5,
      review: 'Outstanding work on my Audi Q7! The team went above and beyond to remove years of wear and tear. The interior looks and smells like new. Professional, reliable, and reasonably priced.',
      service: 'Complete Interior Restoration',
      date: '2024-01-08',
      location: 'Northside',
      verified: true
    },
    {
      id: 4,
      name: 'Jennifer Smith',
      position: 'Doctor',
      company: 'City Medical Center',
      avatar: 'assets/images/avatars/jennifer-s.jpg',
      rating: 5,
      review: 'Amazing transformation! My car had coffee stains and pet hair everywhere. AutoLux worked miracles - now it looks better than when I first bought it. Exceptional customer service too!',
      service: 'Deep Interior Cleaning',
      date: '2024-01-05',
      location: 'Central',
      verified: true
    },
    {
      id: 5,
      name: 'Robert Wilson',
      position: 'Executive',
      company: 'Wilson Holdings',
      avatar: 'assets/images/avatars/robert-w.jpg',
      rating: 5,
      review: 'I drive a lot for work, and AutoLux keeps my vehicle in pristine condition. Their monthly maintenance package is perfect for busy professionals. Quality work, convenient scheduling!',
      service: 'Monthly Maintenance Package',
      date: '2024-01-03',
      location: 'Business District',
      verified: true
    },
    {
      id: 6,
      name: 'Lisa Martinez',
      position: 'Entrepreneur',
      avatar: 'assets/images/avatars/lisa-m.jpg',
      rating: 5,
      review: 'The ceramic coating service is fantastic! Six months later, my car still beads water perfectly and looks glossy. The protection is worth the investment. Great team, great results!',
      service: 'Ceramic Coating Application',
      date: '2023-12-28',
      location: 'Eastside',
      verified: true
    }
  ];

  // Component state
  currentSlide = 0;
  isAutoPlaying = true;
  autoPlayInterval?: number;
  touchStartX = 0;
  touchEndX = 0;
  averageRating = 0;
  totalReviews = 0;

  // Configuration
  readonly autoPlayDelay = 5000; // 5 seconds
  readonly minSwipeDistance = 50; // pixels

  ngOnInit(): void {
    this.calculateAverageRating();
    this.startAutoPlay();
  }

  ngOnDestroy(): void {
    this.stopAutoPlay();
  }

  @HostListener('window:resize', [])
  onWindowResize(): void {
    // Handle responsive changes if needed
  }

  @HostListener('document:visibilitychange', [])
  onVisibilityChange(): void {
    if (document.hidden) {
      this.stopAutoPlay();
    } else if (this.isAutoPlaying) {
      this.startAutoPlay();
    }
  }

  // Calculate average rating and total reviews
  private calculateAverageRating(): void {
    if (this.testimonials.length > 0) {
      const totalRating = this.testimonials.reduce((sum, testimonial) => sum + testimonial.rating, 0);
      this.averageRating = Number((totalRating / this.testimonials.length).toFixed(1));
      this.totalReviews = this.testimonials.length;
    }
  }

  // Navigation methods
  nextSlide(): void {
    this.currentSlide = (this.currentSlide + 1) % this.testimonials.length;
    this.resetAutoPlay();
  }

  prevSlide(): void {
    this.currentSlide = this.currentSlide === 0 
      ? this.testimonials.length - 1 
      : this.currentSlide - 1;
    this.resetAutoPlay();
  }

  goToSlide(index: number): void {
    this.currentSlide = index;
    this.resetAutoPlay();
  }

  // Auto-play functionality
  startAutoPlay(): void {
    if (this.isAutoPlaying && !this.autoPlayInterval) {
      this.autoPlayInterval = window.setInterval(() => {
        this.nextSlide();
      }, this.autoPlayDelay);
    }
  }

  stopAutoPlay(): void {
    if (this.autoPlayInterval) {
      clearInterval(this.autoPlayInterval);
      this.autoPlayInterval = undefined;
    }
  }

  toggleAutoPlay(): void {
    this.isAutoPlaying = !this.isAutoPlaying;
    if (this.isAutoPlaying) {
      this.startAutoPlay();
    } else {
      this.stopAutoPlay();
    }
  }

  private resetAutoPlay(): void {
    if (this.isAutoPlaying) {
      this.stopAutoPlay();
      this.startAutoPlay();
    }
  }

  // Touch/swipe handling
  onTouchStart(event: TouchEvent): void {
    this.touchStartX = event.touches[0].clientX;
  }

  onTouchEnd(event: TouchEvent): void {
    this.touchEndX = event.changedTouches[0].clientX;
    this.handleSwipeGesture();
  }

  private handleSwipeGesture(): void {
    const swipeDistance = this.touchStartX - this.touchEndX;
    
    if (Math.abs(swipeDistance) > this.minSwipeDistance) {
      if (swipeDistance > 0) {
        // Swiped left - next slide
        this.nextSlide();
      } else {
        // Swiped right - previous slide
        this.prevSlide();
      }
    }
  }

  // Mouse events for desktop
  onMouseEnter(): void {
    this.stopAutoPlay();
  }

  onMouseLeave(): void {
    if (this.isAutoPlaying) {
      this.startAutoPlay();
    }
  }

  // Generate star array for rating display
  getStarArray(rating: number): boolean[] {
    return Array(5).fill(false).map((_, index) => index < rating);
  }

  // Format date for display
  formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  }

  // Handle image loading errors
  onAvatarError(event: Event): void {
    const img = event.target as HTMLImageElement;
    img.src = 'assets/images/avatars/default-avatar.svg';
  }

  // Track by function for performance
  trackByTestimonialId(index: number, testimonial: Testimonial): number {
    return testimonial.id;
  }

  // Get visible testimonials for multiple card view
  getVisibleTestimonials(): Testimonial[] {
    const testimonialsToShow = window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1;
    const visible: Testimonial[] = [];
    
    for (let i = 0; i < testimonialsToShow; i++) {
      const index = (this.currentSlide + i) % this.testimonials.length;
      visible.push(this.testimonials[index]);
    }
    
    return visible;
  }

  // Keyboard navigation
  onKeyDown(event: KeyboardEvent): void {
    switch (event.key) {
      case 'ArrowLeft':
        event.preventDefault();
        this.prevSlide();
        break;
      case 'ArrowRight':
        event.preventDefault();
        this.nextSlide();
        break;
      case ' ': // Spacebar
        event.preventDefault();
        this.toggleAutoPlay();
        break;
    }
  }
}