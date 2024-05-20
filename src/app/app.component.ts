import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { AuthenticationService } from './shared/authentication.service';

@Component({
  selector: 'bs-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [RouterOutlet, RouterLink, RouterLinkActive]
})
export class AppComponent {
  constructor(private authService: AuthenticationService) { }
  isLoggedIn() {
    return this.authService.isLoggedIn();
  }
  getLoginLabel() {
    if (this.isLoggedIn()) {
      return "Logout";
    } else {
      return "Login";
    }
  }
}