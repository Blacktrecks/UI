import { Component } from '@angular/core';
import { SendSmsService } from 'src/app/services/sms/send-sms.service';


@Component({
  selector: 'app-send-sms',
  template: `
    <input [(ngModel)]="phoneNumber" placeholder="Recipient's Phone Number">
    <textarea [(ngModel)]="message" placeholder="Message"></textarea>
    <button (click)="sendSMS()">Send SMS</button>
  `
})
export class SendSmsComponent {
  phoneNumber: string = '';
  message: string = '';

  constructor(private sendSmsService: SendSmsService) {}

  sendSMS() {
    this.sendSmsService.sendSMS(this.phoneNumber, this.message)
      .then(() => {
        console.log('SMS sent successfully!');
      })
      .catch(error => {
        console.error('Error sending SMS:', error);
      });
  }
}
