import { Component, OnInit } from '@angular/core';
import { User } from '@auth0/auth0-angular';
import { UsersServiceService } from 'src/app/services/users.service.service';

@Component({
  selector: 'app-search-users',
  templateUrl: './search-users.component.html',
  styleUrls: ['./search-users.component.css']
})
export class SearchUsersComponent implements OnInit {
  searchKeyword: string = '';
  users: User[] = [];

  constructor(private usersServiceService: UsersServiceService) { }

  ngOnInit(): void {}

  searchUsers(): void {
    if (this.searchKeyword.trim() !== '') {
      this.usersServiceService.searchUsers(this.searchKeyword)
        .subscribe({
          next: (users) => {
            this.users = users;
          },
          error: (response) => {
            console.log(response);
          }
        });
    }
  }
}
