import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
    password: ''
  };

  constructor(
    private route: ActivatedRoute,
    private usersServiceService: UsersServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');

      if (id) {
        this.usersServiceService.getUserById(id).
        subscribe({
          next: (response) => {
            this.userDetail = response;
          }
          
        });
      }
    });
  }
  
  updateUser() {
    this.usersServiceService.updateUser(this.userDetail.id, this.userDetail)
      .subscribe({
        next: (response) => {
          this.router.navigate(['users']);
        }
      });
  }

  deleteUser(id: string){
    this.usersServiceService.deleteUser(id)
    .subscribe({
      next: (response) => {
        this.router.navigate(['users']);
      }
    });
  }
}


