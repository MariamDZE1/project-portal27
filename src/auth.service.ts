import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor() {}

  register(username: string, email: string, password: string): Observable<any> {
    const user = { id: Math.floor(Math.random() * 1000), username, email, password, role: 'User' };
    let storedUsers = JSON.parse(localStorage.getItem('users')) || [];
    storedUsers.push(user);
    localStorage.setItem('users', JSON.stringify(storedUsers));
    console.log('მომხმარებელი დარეგისტრირდა:', user);
    return of(user);
  }

  login(email: string, password: string): Observable<any> {
    console.log('ავტორიზაცია ხდება:', { email, password });
    let storedUsers = JSON.parse(localStorage.getItem('users')) || [];
    let user = storedUsers.find(u => u.email === email && u.password === password);
    if (user) {
      console.log('მომხმარებელი ნაპოვნია:', user);
      localStorage.setItem('user', JSON.stringify(user));
      return of(user);
    } else {
      console.error('არასწორი მონაცემები');
      return of({ error: 'Invalid credentials' });
    }
  }

  logout(): void {
    localStorage.removeItem('user');
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('user');
  }
}
