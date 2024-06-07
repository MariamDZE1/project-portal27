import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../../shared/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserSharedService {
  private usersSubject: BehaviorSubject<User[]> = new BehaviorSubject<User[]>([]);
  users$: Observable<User[]> = this.usersSubject.asObservable();

  setUsers(users: User[]): void {
    this.usersSubject.next(users);
  }

  addUser(user: User): void {
    const users = this.usersSubject.getValue();
    users.push(user);
    this.setUsers(users);
    localStorage.setItem('users', JSON.stringify(users));
  }

  getUser(id: number): Observable<User> {
    const users = this.usersSubject.getValue();
    const user = users.find(u => u.id === id);
    return new Observable<User>(observer => {
      observer.next(user);
      observer.complete();
    });
  }

  updateUser(updatedUser: User): Observable<any> {
    const users = this.usersSubject.getValue();
    const index = users.findIndex(u => u.id === updatedUser.id);
    if (index !== -1) {
      users[index] = updatedUser;
      this.setUsers(users);
      localStorage.setItem('users', JSON.stringify(users));
    }
    return new Observable<any>(observer => {
      observer.next();
      observer.complete();
    });
  }
}
