import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FinalBillingService {

  constructor(private httpClient:HttpClient) { }

  addBillingDetails(billingData:any){
    return this.httpClient.post('http://localhost:8088/api/finalorder/v1/addOrderDetails', billingData );
  }
}
