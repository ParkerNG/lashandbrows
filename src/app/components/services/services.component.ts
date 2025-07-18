import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'
@Component({
  selector: 'app-services',
  imports: [CommonModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {

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
    '/lashandbrows/ombre-1.jpg',
    '/lashandbrows/ombre-2.jpg'
  ];

  designImages = [
    '/lashandbrows/design.jpg'
  ]

}
