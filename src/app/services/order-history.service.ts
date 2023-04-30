import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrderHistoryService {

  constructor(private httpClient:HttpClient) { }

  getOrderHistory(email:any){
    // return this.httpClient.get(`http://localhost:8088/api/finalorder/v1/findById/${email}`);
    return this.httpClient.get('http://localhost:8088/api/finalorder/v1/findById/Nikhil@gmail.com')
  }
}
