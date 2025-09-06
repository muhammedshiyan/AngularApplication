import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 
@Component({
  selector: 'app-contactsection',
    standalone: true,                  // ✅ make standalone
  imports: [CommonModule],           // ✅ enable *ngFor
  templateUrl: './contact-section.component.html',
  styleUrl: './contact-section.component.css'
})
export class ContactSectionComponent {

}
