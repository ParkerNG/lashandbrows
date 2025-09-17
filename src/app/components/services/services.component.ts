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
    '/lashandbrows/natural-4.jpg',
    '/lashandbrows/natural-5.jpg',
    '/lashandbrows/natural-6.jpg',
    '/lashandbrows/natural-7.jpg',
    '/lashandbrows/natural-8.jpg'
  ];

  ombreImages = [
    '/lashandbrows/ombre-1.jpg',
    '/lashandbrows/ombre-2.jpg',
    '/lashandbrows/ombre-3.jpg',
    '/lashandbrows/ombre-4.jpg',
    '/lashandbrows/ombre-5.jpg',
    '/lashandbrows/ombre-6.jpg',
    '/lashandbrows/ombre-7.jpg',
    '/lashandbrows/ombre-8.jpg'
  ];

  designImages = [
    '/lashandbrows/design-1.jpg'
  ];

  menImages = [
    '/lashandbrows/men-1.jpg',
    '/lashandbrows/men-2.jpg',
    '/lashandbrows/men-3.jpg',
    '/lashandbrows/men-4.jpg',
  ]


  /* FUNCTIONS */
  navigateToPricing() {
    this.router.navigate(['/pricing']);
  }

}
