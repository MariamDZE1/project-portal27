import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor() {
    this.initializeDefaultAdmin();
  }

  private initializeDefaultAdmin(): void {
    const defaultAdmin = { id: 1, username: 'mariami', email: 'mariami@gmail.com', password: '123', role: 'Admin' };
    let storedUsers = JSON.parse(localStorage.getItem('users')) || [];
    const adminExists = storedUsers.some(user => user.email === defaultAdmin.email);

    if (!adminExists) {
      storedUsers.push(defaultAdmin);
      localStorage.setItem('users', JSON.stringify(storedUsers));
    }
  }

  register(username: string, email: string, password: string): Observable<any> {
    const user = { id: Math.floor(Math.random() * 1000), username, email, password, role: 'User' };
    let storedUsers = JSON.parse(localStorage.getItem('users')) || [];
    
    if (storedUsers.some(u => u.email === email)) {
      return of({ error: 'Email already exists' }).pipe(catchError(this.handleError<any>('register')));
    }
    
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

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
