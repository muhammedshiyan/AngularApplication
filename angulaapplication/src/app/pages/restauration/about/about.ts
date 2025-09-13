import { Component, Inject, OnInit, OnDestroy, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-gallery',
  standalone: true,
  templateUrl: './gallery.html',
  styleUrls: ['./gallery.css']
})
export class Gallery implements OnInit, OnDestroy {
  private isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngOnInit() {
    if (this.isBrowser) {
      this.setupKeyboardNavigation();
    }
  }

  ngOnDestroy() {
    if (this.isBrowser) {
      this.removeKeyboardNavigation();
    }
  }

  setupKeyboardNavigation() {
    document.addEventListener('keydown', this.handleKeydown);
  }

  removeKeyboardNavigation() {
    document.removeEventListener('keydown', this.handleKeydown);
  }

  handleKeydown = (event: KeyboardEvent) => {
    console.log('Key pressed:', event.key);
  };
}
