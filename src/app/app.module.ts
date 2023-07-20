import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatMenuModule } from '@angular/material/menu'; // Add this import for mat-menu
import { MatListModule } from '@angular/material/list';


import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from '@auth0/auth0-angular';
import { AppComponent } from './app.component';
import { EmployeesListComponent } from './components/employees/employees-list/employees-list.component';
import { AddEmployeeComponent } from './components/employees/add-employee/add-employee.component';
import { EditEmployeeComponent } from './components/employees/edit-employee/edit-employee.component';
import { SearchEmployeeComponent } from './components/employees/search-employee/search-employee.component';
import { UserListComponent } from './components/user/user-list/user-list.component';
import { AddUserComponent } from './components/user/add-user/add-user.component';
import { EditUserComponent } from './components/user/edit-user/edit-user.component';
import { SearchUsersComponent } from './components/user/search-users/search-users.component';
import { LoginComponent } from './components/user/login/login.component';
import { UploadAvatarComponent } from './components/upload-avatar/upload-avatar.component';
import { DarkModeButtonComponent } from './components/dark-mode-button/dark-mode-button.component';
import { AuthTokenComponent } from './components/auth-token/auth-token.component';
import { EmailFormComponent } from './components/email-form/email-form.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSnackBarModule } from '@angular/material/snack-bar'; 
@NgModule({
  declarations: [
    AppComponent,
    EmployeesListComponent,
    AddEmployeeComponent,
    EditEmployeeComponent,
    SearchEmployeeComponent,
    UserListComponent,
    AddUserComponent,
    EditUserComponent,
    SearchUsersComponent,
    LoginComponent,
    UploadAvatarComponent,
    DarkModeButtonComponent,
    AuthTokenComponent,
    EmailFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatSlideToggleModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatDividerModule,
    MatMenuModule,
    MatSidenavModule,
    MatListModule,
    MatFormFieldModule,
    MatSnackBarModule,
    AuthModule.forRoot({
      domain: 'dev-ohj5mjnh8a5o1m8l.us.auth0.com',
      clientId: 'EbNu4YDqqUpY3jKuHdJeMORBQul65rgW',
      authorizationParams: {
        redirect_uri:  'http://localhost:4200'
      }
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
