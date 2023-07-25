import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SendSmsService {
  private twilioAccountSid = 'ACa86fc027c6871e9b57c7a4a7daed99d7';
  private twilioAuthToken = '698e069c4dfab536882af9cc7aaa2adc';
  private twilioPhoneNumber = '+40 724 634 142';

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
