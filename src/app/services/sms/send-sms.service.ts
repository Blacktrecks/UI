import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SendSmsService {
  private twilioAccountSid = 'YOUR_TWILIO_ACCOUNT_SID';
  private twilioAuthToken = 'YOUR_TWILIO_AUTH_TOKEN';
  private twilioPhoneNumber = 'YOUR_TWILIO_PHONE_NUMBER';

  constructor(private http: HttpClient) {}

  sendSMS(toPhoneNumber: string, message: string) {
    const url = `https://api.twilio.com/2010-04-01/Accounts/${this.twilioAccountSid}/Messages.json`;
    const body = new URLSearchParams({
      To: toPhoneNumber,
      From: this.twilioPhoneNumber,
      Body: message
    }).toString();

    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Basic ' + btoa(`${this.twilioAccountSid}:${this.twilioAuthToken}`)
    });

    return this.http.post(url, body, { headers }).toPromise();
  }
}
