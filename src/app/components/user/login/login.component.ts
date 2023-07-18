import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/modules/user.model';
import { Router } from '@angular/router';
import { NgModel, NgForm } from '@angular/forms';
import { UsersServiceService } from 'src/app/services/users.service.service';
import { FormControl,FormGroup,Validators,FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
  export class LoginComponent implements OnInit  {
    userIdRequest: User= {

      // Definirea parametrior stadard pentru un utilzator
      id: "",
      name: "",
      email: "",
      password: "",
  };

    //Validari Form

  registerForm:any = FormGroup;
  submitted = false;
  usersServiceService: any;
  constructor( private formBuilder: FormBuilder,  usersServiceService: UsersServiceService, private router: Router){}
  
  //Adauga user din actiuni
  get f() { return this.registerForm.controls; }
  onSubmit() {
    //nu functioneaza sa preia userul din getuserid si sa il afiseze din baza de date
    //this.usersServiceService.getUserId(this.userIdRequest)
    this.submitted = true;
    
    // stop daca e invalid
    if (this.registerForm.invalid) {
        return;
    }
    //True daca campurile sunt completate
    if(this.submitted)
    {
      console.log();
      //console.log(this.userIdRequest.id)
      this.router.navigate([""])
      alert("Works!!");
    }
  }
  ngOnInit() {
    //Add Utilizator din validari
    this.registerForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]]
    });
  }
}

  