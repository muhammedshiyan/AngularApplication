import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; 
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
  selector: 'app-menusectionrestoration',
  standalone: true,                  // ✅ make standalone
  imports: [CommonModule],           // ✅ enable *ngFor
  templateUrl: './menu-section.component.html',
  styleUrls: ['./menu-section.component.css']
})
export class MenuSectionComponentrestoration implements OnInit {
  activeCategory = 'all';
  
  categories = [
    { id: 'all', name: 'All Items' },
    { id: 'appetizers', name: 'Appetizers' },
    { id: 'pasta', name: 'Pasta' },
    { id: 'pizza', name: 'Pizza' },
    { id: 'mains', name: 'Main Courses' },
    { id: 'desserts', name: 'Desserts' }
  ];

  menuItems: MenuItem[] = [
    {
      id: 1,
      name: 'Margherita Pizza',
      description: 'Fresh mozzarella, basil, and tomato sauce on wood-fired crust',
      price: 18,
      image: 'assets/images/margherita-pizza.jpg',
      category: 'pizza',
      featured: true
    },
    {
      id: 2,
      name: 'Spaghetti Carbonara',
      description: 'Traditional Roman pasta with eggs, pecorino, and pancetta',
      price: 22,
      image: 'assets/images/carbonara.jpg',
      category: 'pasta',
      featured: true
    },
    {
      id: 3,
      name: 'Bruschetta Trio',
      description: 'Three varieties: classic tomato, ricotta & honey, prosciutto',
      price: 14,
      image: 'assets/images/bruschetta.jpg',
      category: 'appetizers'
    },
    {
      id: 4,
      name: 'Osso Buco',
      description: 'Slow-braised veal shanks with saffron risotto',
      price: 32,
      image: 'assets/images/osso-buco.jpg',
      category: 'mains',
      featured: true
    },
    {
      id: 5,
      name: 'Tiramisu',
      description: 'Classic Italian dessert with coffee-soaked ladyfingers',
      price: 12,
      image: 'assets/images/tiramisu.jpg',
      category: 'desserts'
    },
    {
      id: 6,
      name: 'Quattro Stagioni',
      description: 'Four seasons pizza with artichokes, olives, ham, and mushrooms',
      price: 24,
      image: 'assets/images/quattro-stagioni.jpg',
      category: 'pizza'
    },
    {
      id: 7,
      name: 'Penne Arrabbiata',
      description: 'Spicy tomato sauce with garlic, chili, and fresh herbs',
      price: 18,
      image: 'assets/images/arrabbiata.jpg',
      category: 'pasta'
    },
    {
      id: 8,
      name: 'Antipasto Platter',
      description: 'Selection of cured meats, cheeses, olives, and vegetables',
      price: 19,
      image: 'assets/images/antipasto.jpg',
      category: 'appetizers'
    }
  ];

  constructor() { }

  ngOnInit(): void {
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