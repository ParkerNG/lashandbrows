import { Component } from '@angular/core';
import { NavComponent } from '../nav/nav.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [NavComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private router: Router) {}

  goToService() {
    this.router.navigate(['/services']);
  }
}
