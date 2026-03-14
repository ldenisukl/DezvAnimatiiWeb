import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-statistics',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './statistics.html',
  styleUrl: './statistics.css',
})
export class Statistics implements AfterViewInit {

  ngAfterViewInit(): void {
    const counters = document.querySelectorAll('.counter');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.startCounter(entry.target as HTMLElement);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    counters.forEach(counter => observer.observe(counter));
  }

  startCounter(counter: HTMLElement) {
    const target = Number(counter.getAttribute('data-target'));
    let count = 0;

    const update = () => {
      const increment = target / 100;

      if (count < target) {
        count += increment;
        counter.innerText = Math.ceil(count).toLocaleString();
        setTimeout(update, 20);
      } else {
        counter.innerText = target.toLocaleString() + '+';
      }
    };

    update();
  }
}