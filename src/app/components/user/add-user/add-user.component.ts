import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/modules/user.model';
import { UsersServiceService } from 'src/app/services/users.service.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {

  addUserRequest: User = {
    id: '',
    name: '',
    email: '',
    password: ''
  };

  hidePassword: boolean = true; // Initialize password visibility

  constructor(
    private usersServiceService: UsersServiceService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
  }

  addUser() {
    this.usersServiceService.addUser(this.addUserRequest)
      .subscribe({
        next: (user) => {
          this.snackBar.open('User successfully added', 'Close', {
            duration: 3000,
          });
          this.router.navigate(['users']);
        },
        error: (error) => {
          this.snackBar.open('Error adding user. Please try again later.', 'Close', {
            duration: 3000,
          });
        }
      });
  }

  togglePasswordVisibility() {
    this.hidePassword = !this.hidePassword;
  }
}
