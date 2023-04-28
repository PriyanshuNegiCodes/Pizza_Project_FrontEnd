import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationserviceService {

  constructor() { }
  loggingStatus=false;
  loggedIn(){
    alert("insider service login")
    this.loggingStatus=true;
  }
  loggedOut(){
    alert("insider service logout")
    this.loggingStatus=false;
  }
  getLogggingStatus(){
    return this.loggingStatus
   }

}
