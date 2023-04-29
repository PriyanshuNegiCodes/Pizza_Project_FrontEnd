import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthnticationService {

  constructor() { }
  loggingStatus=false;
  loggedIn(){
    this.loggingStatus=true;
  }
  loggedOut(){
    this.loggingStatus=false;
  }
  getLoggingStatus(){
    return this.loggingStatus
   }
}
