// components/gallery/gallery.component.ts
import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

interface GalleryImage {
  id: number;
  src: string;
  thumbnail: string;
  alt: string;
  category: string;
  title: string;
  description?: string;
}

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery.html',
  styleUrl: './gallery.css'
})
export class Gallery implements OnInit, OnDestroy {
  // Gallery data
  images: GalleryImage[] = [
    {
      id: 1,
      src: 'assets/images/gallery/exterior-detail-1.jpg',
      thumbnail: 'assets/images/gallery/thumbs/exterior-detail-1.jpg',
      alt: 'Luxury car exterior detailing - before and after',
      category: 'exterior',
      title: 'Premium Exterior Detail',
      description: 'Complete paint correction and ceramic coating application'
    },
    {
      id: 2,
      src: 'assets/images/gallery/interior-detail-1.jpg',
      thumbnail: 'assets/images/gallery/thumbs/interior-detail-1.jpg',
      alt: 'Luxury car interior cleaning and conditioning',
      category: 'interior',
      title: 'Interior Deep Clean',
      description: 'Leather conditioning and fabric protection treatment'
    },
    {
      id: 3,
      src: 'assets/images/gallery/ceramic-coating-1.jpg',
      thumbnail: 'assets/images/gallery/thumbs/ceramic-coating-1.jpg',
      alt: 'Ceramic coating application process',
      category: 'coating',
      title: 'Ceramic Coating',
      description: '9H hardness ceramic coating for ultimate protection'
    },
    {
      id: 4,
      src: 'assets/images/gallery/paint-correction-1.jpg',
      thumbnail: 'assets/images/gallery/thumbs/paint-correction-1.jpg',
      alt: 'Paint correction and swirl mark removal',
      category: 'correction',
      title: 'Paint Correction',
      description: 'Multi-stage paint correction removing swirl marks and scratches'
    },
    {
      id: 5,
      src: 'assets/images/gallery/luxury-suv-1.jpg',
      thumbnail: 'assets/images/gallery/thumbs/luxury-suv-1.jpg',
      alt: 'Luxury SUV complete detailing service',
      category: 'exterior',
      title: 'SUV Complete Detail',
      description: 'Full exterior and interior detailing for luxury SUV'
    },
    {
      id: 6,
      src: 'assets/images/gallery/sports-car-1.jpg',
      thumbnail: 'assets/images/gallery/thumbs/sports-car-1.jpg',
      alt: 'Sports car paint protection and detailing',
      category: 'coating',
      title: 'Sports Car Protection',
      description: 'Paint protection film and ceramic coating for sports car'
    },
    {
      id: 7,
      src: 'assets/images/gallery/engine-detail-1.jpg',
      thumbnail: 'assets/images/gallery/thumbs/engine-detail-1.jpg',
      alt: 'Engine bay detailing and cleaning',
      category: 'engine',
      title: 'Engine Bay Detail',
      description: 'Complete engine bay cleaning and protection'
    },
    {
      id: 8,
      src: 'assets/images/gallery/wheel-detail-1.jpg',
      thumbnail: 'assets/images/gallery/thumbs/wheel-detail-1.jpg',
      alt: 'Wheel and tire detailing service',
      category: 'wheels',
      title: 'Wheel & Tire Detail',
      description: 'Professional wheel cleaning and tire conditioning'
    }
  ];

  // Filter categories
  categories = [
    { id: 'all', name: 'All Work', count: this.images.length },
    { id: 'exterior', name: 'Exterior', count: 0 },
    { id: 'interior', name: 'Interior', count: 0 },
    { id: 'coating', name: 'Ceramic Coating', count: 0 },
    { id: 'correction', name: 'Paint Correction', count: 0 },
    { id: 'engine', name: 'Engine Bay', count: 0 },
    { id: 'wheels', name: 'Wheels & Tires', count: 0 }
  ];

  // Component state
  activeCategory = 'all';
  filteredImages: GalleryImage[] = [];
  isLightboxOpen = false;
  currentImageIndex = 0;
  currentImage: GalleryImage | null = null;
  isLoading = false;

  // Lightbox navigation
  private keydownListener?: (event: KeyboardEvent) => void;

  ngOnInit(): void {
    this.calculateCategoryCounts();
    this.filterImages('all');
    this.setupKeyboardNavigation();
  }

  ngOnDestroy(): void {
    this.removeKeyboardNavigation();
  }

  @HostListener('window:resize', [])
  onWindowResize(): void {
    // Handle responsive layout changes if needed
  }

  // Calculate count for each category
  private calculateCategoryCounts(): void {
    this.categories.forEach(category => {
      if (category.id !== 'all') {
        category.count = this.images.filter(img => img.category === category.id).length;
      }
    });
  }

  // Filter images by category
  filterImages(category: string): void {
    this.activeCategory = category;
    this.isLoading = true;

    // Simulate loading delay for smooth transition
    setTimeout(() => {
      if (category === 'all') {
        this.filteredImages = [...this.images];
      } else {
        this.filteredImages = this.images.filter(img => img.category === category);
      }
      this.isLoading = false;
    }, 300);
  }

  // Open lightbox with specific image
  openLightbox(image: GalleryImage): void {
    this.currentImage = image;
    this.currentImageIndex = this.filteredImages.findIndex(img => img.id === image.id);
    this.isLightboxOpen = true;
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  }

  // Close lightbox
  closeLightbox(): void {
    this.isLightboxOpen = false;
    this.currentImage = null;
    document.body.style.overflow = 'auto'; // Restore scrolling
  }

  // Navigate to previous image
  previousImage(): void {
    if (this.currentImageIndex > 0) {
      this.currentImageIndex--;
      this.currentImage = this.filteredImages[this.currentImageIndex];
    } else {
      // Loop to last image
      this.currentImageIndex = this.filteredImages.length - 1;
      this.currentImage = this.filteredImages[this.currentImageIndex];
    }
  }

  // Navigate to next image
  nextImage(): void {
    if (this.currentImageIndex < this.filteredImages.length - 1) {
      this.currentImageIndex++;
      this.currentImage = this.filteredImages[this.currentImageIndex];
    } else {
      // Loop to first image
      this.currentImageIndex = 0;
      this.currentImage = this.filteredImages[this.currentImageIndex];
    }
  }

  // Handle image load error
  onImageError(event: Event): void {
    const img = event.target as HTMLImageElement;
    img.src = 'assets/images/placeholder-car.jpg'; // Fallback image
  }

  // Setup keyboard navigation for lightbox
  private setupKeyboardNavigation(): void {
    this.keydownListener = (event: KeyboardEvent) => {
      if (!this.isLightboxOpen) return;

      switch (event.key) {
        case 'Escape':
          this.closeLightbox();
          break;
        case 'ArrowLeft':
          event.preventDefault();
          this.previousImage();
          break;
        case 'ArrowRight':
          event.preventDefault();
          this.nextImage();
          break;
      }
    };

    document.addEventListener('keydown', this.keydownListener);
  }

  // Remove keyboard navigation
  private removeKeyboardNavigation(): void {
    if (this.keydownListener) {
      document.removeEventListener('keydown', this.keydownListener);
    }
  }

  // Track by function for ngFor performance
  trackByImageId(index: number, image: GalleryImage): number {
    return image.id;
  }

  trackByCategoryId(index: number, category: any): string {
    return category.id;
  }
}