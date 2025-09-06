import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; 

interface Stat {
  number: string;
  label: string;
}

@Component({
  selector: 'app-aboutsection',
  standalone: true,                  // ✅ make standalone
  imports: [CommonModule],           // ✅ enable *ngFor
  templateUrl: './about-section.component.html',
  styleUrls: ['./about-section.component.css']
})
export class AboutSectionComponent implements OnInit {
  stats: Stat[] = [
    { number: '25+', label: 'Years of Excellence' },
    { number: '10K+', label: 'Happy Customers' },
    { number: '50+', label: 'Signature Dishes' },
    { number: '5★', label: 'Rating' }
  ];

  constructor() { }

  ngOnInit(): void {
  }
}