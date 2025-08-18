import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class Dashboardcomponent {
darkMode = false;
  sidebarCollapsed = false;
  username = 'John Doe';

  constructor(private router: Router) {}

  toggleSidebar() {
    this.sidebarCollapsed = !this.sidebarCollapsed;
  }

  toggleTheme() {
    this.darkMode = !this.darkMode;
  }

  logout() {
    localStorage.removeItem('jwtToken');
    this.router.navigate(['/login']);
  }

  randomizeSales() {
    alert('Sales data refreshed!');
  }

  randomizeUsers() {
    alert('User growth data refreshed!');
  }
}
