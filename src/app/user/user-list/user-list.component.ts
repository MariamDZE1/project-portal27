import { Component, OnInit } from '@angular/core';
import { UserSharedService } from '../../core/services/user-shared.service';
import { User } from '../../shared/models/user.model';
import { rowAnimation } from '../../animations';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  animations: [rowAnimation]
})
export class UserListComponent implements OnInit {
  users: User[] = [];
  displayedColumns: string[] = ['id', 'username', 'email', 'password', 'actions'];
  isLoading = true;

  constructor(private userSharedService: UserSharedService) {}

  ngOnInit(): void {
    const currentUser = JSON.parse(localStorage.getItem('user'));
    if (currentUser) {
      const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
      this.userSharedService.setUsers(storedUsers);
    } else {
      this.userSharedService.setUsers([]);
    }

    this.userSharedService.users$.subscribe(users => {
      this.users = users;
      this.isLoading = false;
    });
  }

  togglePasswordVisibility(user: User): void {
    user.showPassword = !user.showPassword;
  }

  editUser(user: User): void {
    user.isEditing = true;
    user.editableUsername = user.username;
    user.editableEmail = user.email;
    user.editablePassword = user.password;
  }

  saveChanges(user: User): void {
    if (user.editableUsername && user.editableEmail && user.editablePassword) {
      user.username = user.editableUsername;
      user.email = user.editableEmail;
      user.password = user.editablePassword;
    }
    user.isEditing = false;
    this.userSharedService.updateUser(user).subscribe(() => {
      const users = JSON.parse(localStorage.getItem('users')) || [];
      const index = users.findIndex(u => u.id === user.id);
      if (index !== -1) {
        users[index] = user;
        localStorage.setItem('users', JSON.stringify(users));
      }
    });
  }
}
