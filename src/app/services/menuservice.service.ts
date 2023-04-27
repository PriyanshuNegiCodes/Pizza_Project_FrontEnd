import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MenuserviceService {

  constructor( private httpClient: HttpClient) { }

  getMenu(){
    let httpHeader=new HttpHeaders({
      'Authorization': 'Bearer ' +localStorage.getItem('jwt')
    })
    let requestOptions={headers:httpHeader}

    return this.httpClient.get('http://localhost:63300/api/orders/v1/allMenu',requestOptions );
  }
}
