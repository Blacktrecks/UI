import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeesListComponent } from './components/employees/employees-list/employees-list.component';
import { HttpClientModule } from '@angular/common/http';
import { AddEmployeeComponent } from './components/employees/add-employee/add-employee.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditEmployeeComponent } from './components/employees/edit-employee/edit-employee.component';
import { AddUserComponent } from './components/user/add-user/add-user.component';
import { EditUserComponent } from './components/user/edit-user/edit-user.component';
import { UserListComponent } from './components/user/user-list/user-list.component';
import { LoginComponent } from './components/user/login/login.component';
import { UploadAvatarComponent } from './components/upload-avatar/upload-avatar.component';

// Import the module from the SDK
import { AuthModule } from '@auth0/auth0-angular';
import { AuthService } from '@auth0/auth0-angular/lib/auth.service';
import { DarkModeButtonComponent } from './components/dark-mode-button/dark-mode-button.component';
import { SearchEmployeeComponent } from './components/employees/search-employee/search-employee.component';
import { SearchUsersComponent } from './components/user/search-users/search-users.component';
import { AuthTokenComponent } from './components/auth-token/auth-token.component';


@NgModule({
  declarations: [
    AppComponent,
    EmployeesListComponent,
    AddEmployeeComponent,
    EditEmployeeComponent,
    AddUserComponent,
    EditUserComponent,
    UserListComponent,
    LoginComponent,
    UploadAvatarComponent,
    DarkModeButtonComponent,
    SearchEmployeeComponent,
    SearchUsersComponent,
    AuthTokenComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,


    // Import the module into the application, with configuration
    AuthModule.forRoot({
      domain: 'dev-ohj5mjnh8a5o1m8l.us.auth0.com',
      clientId: 'EbNu4YDqqUpY3jKuHdJeMORBQul65rgW',
      
      authorizationParams: {
        redirect_uri:  'http://localhost:4200'
      }
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
