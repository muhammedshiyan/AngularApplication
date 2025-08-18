import { Component } from '@angular/core';
import { RouterOutlet,RouterLink, RouterLinkActive,Router  } from '@angular/router';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet,RouterLink, RouterLinkActive],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class Layoutcomponent  {
constructor(private router: Router) {}

  logout() {
    // 🔹 Clear stored token/session
    localStorage.removeItem('token'); 
    sessionStorage.clear();

    // 🔹 Navigate to login
    this.router.navigate(['/login']);
  }
}
