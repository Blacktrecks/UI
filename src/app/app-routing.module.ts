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
import { AdminPanelComponent } from './components/admin-template/admin-panel/admin-panel.component';
import { UserPanelComponent } from './components/user-template/user-panel/user-panel.component';
import { MainPanelComponent } from './components/main-template/main-panel/main-panel.component';
import { AdminDashboardsGuardComponent } from './components/admin-template/admin-dashboards.guard/admin-dashboards.guard.component';
import { SendSmsComponent } from './components/sms/send-sms/send-sms.component';
import { NoteFormComponent } from './components/note/note-form/note-form.component';
import { AssignmentComponent } from './components/assignment/assignment/assignment.component';




const routes: Routes = [
  
  {
    path: 'login',
    component: LoginComponent
  },

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

  //day 10 admin routing
  {
    path: 'admin',
    component: AdminPanelComponent,
    // canActivate: [AuthGuard], // Protect this route with AuthGuard
    // data: { roles: ['admin'] }, // Optionally, specify roles that are allowed to access this route
  },
  //day 10 user user panel
  {
    path: 'userpanel',
    component: UserPanelComponent,
    // data: { roles: ['user'] }, // Optionally, specify roles that are allowed to access this route
    // canActivate: [AuthGuard] // Protect this route with AuthGuard
  },
  //day 10 main panel
  {
    path: 'main',
    component: MainPanelComponent
  },
  //Day 12 : Start send sms
  {
    path: 'send-sms',
    component: SendSmsComponent
  },

  //day 14 note-form routing for user
  { path: 'note/add', component: NoteFormComponent },

  //task-form routing for admin
  {path: 'admin/assignments', component: AssignmentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
