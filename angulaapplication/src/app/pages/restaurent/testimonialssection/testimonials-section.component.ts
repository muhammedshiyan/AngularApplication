import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { RestaurentService } from '../../../services/restaurent/restaurent.service';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: string;
  rating: number;
  review: string;
  ReviewDate: string;
}

@Component({
  selector: 'app-testimonialssection',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonials-section.component.html',
  styleUrls: ['./testimonials-section.component.css']
})
export class TestimonialsSection implements OnInit, OnDestroy {
  currentIndex = 0;
  autoPlayInterval: any;
  testimonials: Testimonial[] = [];
  isLoading = true; // Add loading state
  
  constructor(private restaurentService: RestaurentService) { }

  ngOnInit(): void {
    this.getTestimonials();
    // Start autoplay after data is loaded
  }
  
  getTestimonials(): void {
    this.restaurentService.getTestimonials().subscribe({
      next: (data) => {
        this.testimonials = data;
        this.isLoading = false;
        // Start autoplay only after data is loaded
        if (this.testimonials.length > 0) {
          this.startAutoPlay();
        }
      },
      error: (err) => {
        console.error('Error fetching testimonials', err);
        this.isLoading = false;
        // Optionally set some fallback data or show error message
      }
    });
  }

  ngOnDestroy(): void {
    this.stopAutoPlay();
  }

  startAutoPlay(): void {
    this.stopAutoPlay(); // Clear any existing interval
    this.autoPlayInterval = setInterval(() => {
      this.nextSlide();
    }, 5000);
  }

  stopAutoPlay(): void {
    if (this.autoPlayInterval) {
      clearInterval(this.autoPlayInterval);
      this.autoPlayInterval = null;
    }
  }

  nextSlide(): void {
    if (this.testimonials.length === 0) return;
    this.currentIndex = (this.currentIndex + 1) % this.testimonials.length;
  }

  prevSlide(): void {
    if (this.testimonials.length === 0) return;
    this.currentIndex = this.currentIndex === 0 
      ? this.testimonials.length - 1 
      : this.currentIndex - 1;
  }

  goToSlide(index: number): void {
    if (index >= 0 && index < this.testimonials.length) {
      this.currentIndex = index;
    }
  }

  getStars(rating: number): number[] {
    return Array(Math.max(0, Math.min(5, rating || 0))).fill(0);
  }

  get visibleTestimonials(): Testimonial[] {
    if (this.testimonials.length === 0) {
      return []; // Return empty array instead of undefined items
    }
    
    const result: Testimonial[] = [];
    const testimonialsCount = this.testimonials.length;
    
    // Handle cases where we have fewer than 3 testimonials
    const itemsToShow = Math.min(3, testimonialsCount);
    
    for (let i = 0; i < itemsToShow; i++) {
      const index = (this.currentIndex + i) % testimonialsCount;
      result.push(this.testimonials[index]);
    }
    
    return result;
  }
}