import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../services/auth.service';  
import { RestaurentService } from '../../../services/restaurent/restaurent.service';

interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  featured?: boolean;
  rating?: number;
}

@Component({
  selector: 'app-menusection',
  standalone: true,                  // ✅ make standalone
  imports: [CommonModule],           // ✅ enable *ngFor
  templateUrl: './menu-section.component.html',
  styleUrls: ['./menu-section.component.css']
})
export class MenuSectionComponent implements OnInit {
  activeCategory = 'all';
  
  categories = [
    { id: 'all', name: 'All Items' },
    { id: 'appetizers', name: 'Appetizers' },
    { id: 'pasta', name: 'Pasta' },
    { id: 'pizza', name: 'Pizza' },
    { id: 'mains', name: 'Main Courses' },
    { id: 'desserts', name: 'Desserts' }
  ];
    menuItems: MenuItem[] = [];
  constructor(private restaurentService: RestaurentService) {


   }

  ngOnInit(): void {
    this.getMenuItems();
  }
  getMenuItems(): void {
    this.restaurentService.getMenus().subscribe({
      next: (data) => {
        this.menuItems = data;
      },
      error: (err) => {
        console.error('Error fetching menu items', err);
      }
    });
  }
  setActiveCategory(category: string): void {
    this.activeCategory = category;
  }

  get filteredItems(): MenuItem[] {
    if (this.activeCategory === 'all') {
      return this.menuItems;
    }
    return this.menuItems.filter(item => item.category === this.activeCategory);
  }

  get featuredItems(): MenuItem[] {
    return this.menuItems.filter(item => item.featured);
  }
}