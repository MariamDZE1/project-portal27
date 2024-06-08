import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { User } from '../../shared/models/user.model'; 

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/users';

  constructor() {}

  getUsers(): Observable<User[]> {
    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
    const loggedInUser = JSON.parse(localStorage.getItem('currentUser'));
    const usersToShow = loggedInUser ? storedUsers.filter(user => user.email !== loggedInUser.email) : [];
    return of(usersToShow).pipe(catchError(this.handleError<User[]>('getUsers', [])));
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
