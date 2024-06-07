import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'User Management Dashboard';

  ngOnInit(): void {
    this.setDefaultAdminUser();
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
}
