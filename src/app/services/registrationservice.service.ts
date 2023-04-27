import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class RegistrationserviceService {

  constructor(private httpClient:HttpClient) { }

  regsiterCustomer(userData:any){
    return this.httpClient.post('http://localhost:5555/api/auth/v1/register', userData );
  }
}
