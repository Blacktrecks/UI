import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesListComponent } from './components/employees/employees-list/employees-list.component';
import { AddEmployeeComponent } from './components/employees/add-employee/add-employee.component';
import { EditEmployeeComponent } from './components/employees/edit-employee/edit-employee.component';
import { UserListComponent } from './components/user/user-list/user-list.component';
import { AddUserComponent } from './components/user/add-user/add-user.component';
import { LoginComponent } from './components/user/login/login.component';
import { EditUserComponent } from './components/user/edit-user/edit-user.component';
import { UploadAvatarComponent } from './components/upload-avatar/upload-avatar.component';
import { SearchEmployeeComponent } from './components/employees/search-employee/search-employee.component';
import { SearchUsersComponent } from './components/user/search-users/search-users.component';
import { AppComponent } from './app.component';
import { AuthGuard } from '@auth0/auth0-angular';
import { AuthTokenComponent } from './components/auth-token/auth-token.component';
import { EmailFormComponent } from './components/email-form/email-form.component';


const routes: Routes = [
 
  {
    path: 'employees',
    component: EmployeesListComponent
  },
  {
    path: 'employees/add',
    component: AddEmployeeComponent
  },
  {
  path: 'employees/search',
  component: SearchEmployeeComponent
  },
  {
    path: 'employees/edit/:id',
    component: EditEmployeeComponent
  },
  {
    path: 'users',
    component: UserListComponent
  },
  {
    path: 'users/add',
    component: AddUserComponent
  },
  {
    path: 'users/search',
    component: SearchUsersComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  //Ziua 8 asta te duce in log in pentru a putea accesa pagina
  //{
  //  path: '', component: AppComponent, canActivate: [AuthGuard]
 // },

 //Ziua 8: Show Login Token
 {
   path: 'token',
   component: AuthTokenComponent
 },
  {
    path: 'users/edit/:id',
    component: EditUserComponent
    
  },
  //Ziua 8: FOrm EMail ROuting
{
  path: 'form',
  component: EmailFormComponent
},

  {
    path: 'upload',
    component: UploadAvatarComponent
    
  },

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
