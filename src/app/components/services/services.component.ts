import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-services',
  imports: [CommonModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {
  constructor(
    private router: Router
  ){}

  naturalImages = [
    '/lashandbrows/natural-1.jpg',
    '/lashandbrows/natural-2.jpg',
    '/lashandbrows/natural-3.jpg',
    // '/lashandbrows/natural-4.jpg',
    '/lashandbrows/natural-5.jpg',
    // '/lashandbrows/natural-6.jpg',
    '/lashandbrows/natural-7.jpg',
    '/lashandbrows/natural-8.jpg',
    '/lashandbrows/natural-9.jpg',
    '/lashandbrows/natural-10.jpg',
    // '/lashandbrows/natural-11.jpg',
    '/lashandbrows/natural-12.jpg',
    '/lashandbrows/natural-13.jpg'
  ];

  ombreImages = [
    '/lashandbrows/ombre-2.jpg',
    '/lashandbrows/design.jpg'
  ];

  designImages = [
    '/lashandbrows/ombre-1.jpg'
  ]

  /* FUNCTIONS */
  navigateToPricing() {
    this.router.navigate(['/pricing']);
  }

}
