import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar'; // Import MatSnackBar
import { User } from 'src/app/modules/user.model';
import { UsersServiceService } from 'src/app/services/users.service.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent {
  userDetail: User = {
    id: '',
    name: '',
    email: '',
    nickname: '',
    picture: '',
    auth0Id: ''
  };

  constructor(
    private route: ActivatedRoute,
    private usersServiceService: UsersServiceService,
    private router: Router,
    private snackBar: MatSnackBar // Inject MatSnackBar here
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');

      if (id) {
        this.usersServiceService.getUserById(id)
          .subscribe({
            next: (response) => {
              this.userDetail = response;
            },
            error: (err) => {
              // Handle error if necessary and show snackbar with appropriate error message if desired
            }
          });
      }
    });
  }

  updateUser() {
    this.usersServiceService.updateUser(this.userDetail.id, this.userDetail)
      .subscribe({
        next: (response) => {
          this.snackBar.open('User successfully edited', 'Close', {
            duration: 3000,
          });
          this.router.navigate(['users']);
        },
        error: (err) => {
          // Handle error if necessary and show snackbar with appropriate error message if desired
        }
      });
  }

  deleteUser(id: string) {
    this.usersServiceService.deleteUser(id)
      .subscribe({
        next: (response) => {
          this.snackBar.open('User successfully deleted', 'Close', {
            duration: 3000,
          });
          this.router.navigate(['users']);
        },
        error: (err) => {
          // Handle error if necessary and show snackbar with appropriate error message if desired
        }
      });
  }
}
