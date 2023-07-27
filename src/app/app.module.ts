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
import { AuthTokenComponent } from './components/auth-token/auth-token.component';
import { EmailFormComponent } from './components/email-form/email-form.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { Auth0Service } from './services/auth/auth0-service/auth0-service.component';
import { AdminPanelComponent } from './components/admin-template/admin-panel/admin-panel.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { NavbarToggleService } from './services/navbar-toggle.service';
import { UserPanelComponent } from './components/user-template/user-panel/user-panel.component';
import { MainPanelComponent } from './components/main-template/main-panel/main-panel.component';
import { AdminDashboardsGuardComponent } from './components/admin-template/admin-dashboards.guard/admin-dashboards.guard.component';
import { SendSmsComponent } from './components/sms/send-sms/send-sms.component';
import { NoteFormComponent } from './components/note/note-form/note-form.component';
import { AssignmentComponent } from './components/assignment/assignment/assignment.component';


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
    AuthTokenComponent,
    EmailFormComponent,
    Auth0Service,
    AdminPanelComponent,
    NavBarComponent,
    UserPanelComponent,
    MainPanelComponent,
    SendSmsComponent,
    NoteFormComponent,
    AssignmentComponent,
   
 
   
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
   
  
    /* AuthModule.forRoot({
      domain: 'dev-ohj5mjnh8a5o1m8l.us.auth0.com',
      clientId: 'EbNu4YDqqUpY3jKuHdJeMORBQul65rgW',
    
      authorizationParams: {
        redirect_uri:  'http://localhost:4200'
      }
    }), */
    AuthModule.forRoot({
      // The domain and clientId were configured in the previous chapter
      domain: 'dev-ohj5mjnh8a5o1m8l.us.auth0.com',
      clientId: '9DoVK92n7hJBlNjzXfzHUQTplPb0ovNh',     
      
         
      authorizationParams: {
        // Request this audience at user authentication time
        audience: 'https://dev-ohj5mjnh8a5o1m8l.us.auth0.com/api/v2/',
        redirect_uri: window.location.origin,
    
        
      },    
      httpInterceptor: {
        allowedList: [
          {
            // Match any request that starts 'https://dev-8fjsmm0833klajbt.us.auth0.com/api/v2/' (note the asterisk)
            uri: 'https://dev-ohj5mjnh8a5o1m8l.us.auth0.com/api/v2/*',
            tokenOptions: {
              authorizationParams: {
                // The attached token should target this audience
                audience: 'https://dev-ohj5mjnh8a5o1m8l.us.auth0.com/api/v2/',
    
              }
            }
          }
        ]
      }
      
    }),
  ],
  providers: [
    Auth0Service,
    NavbarToggleService,
    AdminDashboardsGuardComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
