import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: false,
  
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  toggleNav() {
    const nav = document.querySelector('.nav-links') as HTMLElement;
    nav.classList.toggle('nav-active');
  }

}
