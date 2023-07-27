import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { AuthService, User } from '@auth0/auth0-angular';
import emailjs from '@emailjs/browser';
import { Auth0Service } from './services/auth/auth0-service/auth0-service.component';
import { UsersServiceService } from './services/users.service.service';
import { NavigationEnd, Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  isOnAdminRoute = false;

  registerForm: FormGroup = new FormGroup({}); // Initialize with an empty form group
  submitted = false;
  auth: AuthService;
  offcanvasOpen = false;
  user: any;
  userAdd: User = {
    id: '',
    name: '',
    email: '',
    nickname: '',
    picture: '',
    auth0Id: '',

  }

  toggleOffcanvas() {
    this.offcanvasOpen = !this.offcanvasOpen;
  }

  closeOffcanvas() {
    this.offcanvasOpen = false;
  }

  constructor(private formBuilder: FormBuilder, auth: AuthService, private authService: Auth0Service, private userService: UsersServiceService, private router: Router) {
    this.auth = auth;
    

    router.events.subscribe((event) => {
      if(event instanceof NavigationEnd) {
        this.isOnAdminRoute = event.url == '/admin';
      }
    });
  }

  get f() {
    return this.registerForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
    alert('Validat cu succes!!');
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]

    });

    this.authService.getUserData().subscribe((user: any) => {
      if (user) {
        this.user = user;
  
        this.userAdd['id'] = this.user.sub || '';
        this.userAdd['name'] = this.user.name || '';
        this.userAdd['nickname'] = this.user.nickname || '';
        this.userAdd['email'] = this.user.email || '';
        this.userAdd['picture'] = this.user.picture || '';
  
        this.addUsers(this.userAdd);
      }
    })
  
  }

  addUsers(user: any) {
    this.userService.addUser(user)
      .subscribe({
        next: (response) => {
          console.log(response)
        },
        error: (error) => {
          console.log(error)
        }
      });
  }
  //Day 8: Functie email send la forms
  form: FormGroup = this.formBuilder.group({
    from_name: '',
    to_name: '',
    from_email: '',
    subject: '',
    message: ''
  });
  send() {
    emailjs.send('service_pgfw28a', 'template_x69c03l', {
      from_name: 'Blacktrecks',
      to_name: 'test',
      from_email: 'pitarroman@gmail.com',
      subject: 'Test subject',
      message: 'this is a message',

    });
  }
}
