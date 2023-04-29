import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationserviceService {
  loggingStatus = false;

  loggedIn() {
    this.loggingStatus = true;
    console.log("this is loggedIn " + this.loggingStatus);
  }

  loggedOut() {
    this.loggingStatus = false;
    console.log("this is loggedOut " + this.loggingStatus);
  }

  getCurrentStatus() {
    return this.loggingStatus;
  }
}
