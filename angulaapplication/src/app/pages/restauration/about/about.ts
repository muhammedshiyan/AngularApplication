import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.html',
  styleUrls: ['./about.css']
})
export class About implements AfterViewInit {
  counters = [
    { label: 'Years of Experience', value: 11, current: 0 },
    { label: 'Projects Delivered', value: 50, current: 0 },
    { label: 'Happy Clients', value: 25, current: 0 }
  ];

  ngAfterViewInit() {
    this.animateCounters();
  }

  animateCounters() {
    this.counters.forEach(counter => {
      let start = 0;
      const end = counter.value;
      const step = Math.ceil(end / 100); // smooth animation
      const interval = setInterval(() => {
        start += step;
        if (start >= end) {
          counter.current = end;
          clearInterval(interval);
        } else {
          counter.current = start;
        }
      }, 30);
    });
  }
}
