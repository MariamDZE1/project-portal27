import { Component, OnInit } from '@angular/core';
import { AuthService } from './core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'User Management Dashboard';

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.setDefaultAdminUser();
    if (!this.authService.isLoggedIn()) {
      this.router.navigate(['/login']);
    }
  }

  setDefaultAdminUser(): void {
    const defaultAdmin = {
      id: 1,
      username: 'mariami',
      email: 'mariami@gmail.com',
      password: '123',
      role: 'Admin'
    };

    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
    const adminExists = storedUsers.some(user => user.email === defaultAdmin.email);

    if (!adminExists) {
      storedUsers.push(defaultAdmin);
      localStorage.setItem('users', JSON.stringify(storedUsers));
    }
  }

  isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }
}
