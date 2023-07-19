

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-email-form',
  templateUrl: './email-form.component.html',
  styleUrls: ['./email-form.component.css']
})
export class EmailFormComponent implements OnInit {
  form: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      from_name: ['', Validators.required],
      to_name: ['', Validators.required],
      from_email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', Validators.required],
    });
  }

  async send() {
    const { from_name, to_name, from_email, subject, message } = this.form.value;

    try {
      await emailjs.send(
        'service_pgfw28a',
        'template_x69c03l',
        {
          from_name,
          to_name,
          from_email,
          subject,
          message,
        },
        'G8-cCWTEuIO2LQkT5'
      );

      alert('Message Sent!');
      this.form.reset();
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Error sending email. Please try again later.');
    }
  }
}
