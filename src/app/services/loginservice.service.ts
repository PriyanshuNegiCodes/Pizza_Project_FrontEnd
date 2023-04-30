import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {

  constructor(private httpClient:HttpClient) {}

  baseUrl:string ="http://localhost:9999/api/auth/v1/";

  loginUser(loginData:any){
    return this.httpClient.post(this.baseUrl+"login", loginData);
  }
}
