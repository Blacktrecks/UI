import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/modules/user.model';
import { UsersServiceService } from 'src/app/services/users.service.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: User[] = [];
  constructor(private usersServiceService: UsersServiceService) {}

  ngOnInit(): void {
    this.usersServiceService.getAllUsers()
    .subscribe({
      next: (users) => {
        this.users = users;
      },
      error: (response) => {
        console.log(response);
      }
    })
  }

}

function subscribe(arg0: { next: (user: any) => void; error: (response: any) => void; }) {
  throw new Error('Function not implemented.');
}

