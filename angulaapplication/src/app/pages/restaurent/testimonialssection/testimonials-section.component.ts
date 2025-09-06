import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; 
interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: string;
  rating: number;
  review: string;
  date: string;
}

@Component({
  selector: 'app-testimonialssection',
  standalone: true,                  // ✅ make standalone
  imports: [CommonModule],           // ✅ enable *ngFor
  templateUrl: './testimonials-section.component.html',
  styleUrls: ['./testimonials-section.component.css']
})
export class TestimonialsSection implements OnInit {
  currentIndex = 0;
  autoPlayInterval: any;

  testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Food Blogger',
      image: 'assets/images/testimonial-1.jpg',
      rating: 5,
      review: 'Absolutely phenomenal! The pasta was cooked to perfection and the ambiance transported me straight to Italy. This is hands down the best Italian restaurant in the city.',
      date: '2 weeks ago'
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Local Resident',
      image: 'assets/images/testimonial-2.jpg',
      rating: 5,
      review: 'My family and I have been coming here for years, and they never disappoint. The wood-fired pizzas are incredible, and the staff treats you like family.',
      date: '1 month ago'
    },
    {
      id: 3,
      name: 'Emma Rodriguez',
      role: 'Chef',
      image: 'assets/images/testimonial-3.jpg',
      rating: 5,
      review: 'As a fellow chef, I have high standards, and Bella Vista exceeds them all. The attention to detail and authentic flavors are truly remarkable.',
      date: '3 weeks ago'
    },
    {
      id: 4,
      name: 'David Thompson',
      role: 'Business Owner',
      image: 'assets/images/testimonial-4.jpg',
      rating: 5,
      review: 'Perfect for business dinners and special occasions. The service is impeccable, and every dish is a masterpiece. Highly recommended!',
      date: '1 week ago'
    },
    {
      id: 5,
      name: 'Lisa Parker',
      role: 'Travel Enthusiast',
      image: 'assets/images/testimonial-5.jpg',
      rating: 5,
      review: "I've traveled all over Italy, and this restaurant captures the authentic Italian dining experience perfectly. It's like a little slice of heaven!",
      date: '2 months ago'
    }
  ];

  constructor() { }

  ngOnInit(): void {
    this.startAutoPlay();
  }

  ngOnDestroy(): void {
    this.stopAutoPlay();
  }

  startAutoPlay(): void {
    this.autoPlayInterval = setInterval(() => {
      this.nextSlide();
    }, 5000);
  }

  stopAutoPlay(): void {
    if (this.autoPlayInterval) {
      clearInterval(this.autoPlayInterval);
    }
  }

  nextSlide(): void {
    this.currentIndex = (this.currentIndex + 1) % this.testimonials.length;
  }

  prevSlide(): void {
    this.currentIndex = this.currentIndex === 0 
      ? this.testimonials.length - 1 
      : this.currentIndex - 1;
  }

  goToSlide(index: number): void {
    this.currentIndex = index;
  }

  getStars(rating: number): number[] {
    return Array(rating).fill(0);
  }

  get visibleTestimonials(): Testimonial[] {
    const testimonials = [...this.testimonials];
    const result = [];
    
    for (let i = 0; i < 3; i++) {
      const index = (this.currentIndex + i) % testimonials.length;
      result.push(testimonials[index]);
    }
    
    return result;
  }
}