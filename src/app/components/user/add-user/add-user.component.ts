import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/modules/user.model';
import { UsersServiceService } from 'src/app/services/users.service.service';

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

  constructor(private usersServiceService: UsersServiceService, private router: Router) {}

  ngOnInit(): void {

  }
  
  addUser() {
    this.usersServiceService.addUser(this.addUserRequest)
    .subscribe({
      next: (user) => {
        this.router.navigate(['users']);
      }
    });
  }
}




