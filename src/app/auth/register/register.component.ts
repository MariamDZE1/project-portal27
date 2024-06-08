import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../core/services/auth.service';
import { Router } from '@angular/router';
import { UserSharedService } from '../../core/services/user-shared.service';
import { User } from '../../shared/models/user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerForm: FormGroup;
  submitted = false;
  registrationSuccess = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private userSharedService: UserSharedService
  ) {
    this.registerForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(3)]]
    });
  }

  get f() {
    return this.registerForm.controls;
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.registerForm.valid) {
      const { username, email, password } = this.registerForm.value;
      const users = JSON.parse(localStorage.getItem('users')) || [];
      const newUser: User = { id: users.length + 1, username, email, password, role: 'User' };

      users.push(newUser);
      localStorage.setItem('users', JSON.stringify(users));

      this.authService.register(username, email, password).subscribe(response => {
        this.userSharedService.addUser(newUser);
        this.registrationSuccess = true;
        setTimeout(() => {
          this.router.navigate(['/users']);
        }, 2000);
      }, error => {
        console.error('Registration failed', error);
      });
    }
  }
}
