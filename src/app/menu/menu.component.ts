import { Component, OnInit } from '@angular/core';
import { Orders } from 'src/assets/menu';
import { MenuserviceService } from '../services/menuservice.service';
import { FinalOrder } from 'src/assets/orderDetails';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  panelOpenState = false;


  menuList:Orders|any;

  finalOrder: FinalOrder = {
    email: '',
    phoneNumber: 0,
    address: '',
    restaurantName: '',
    restaurantAddress: '',
    list: [],
    grandTotal: 0
  }


  constructor(private services:MenuserviceService, private routing: Router){}
  ngOnInit() {
    return this.services.getMenu().subscribe(
      response=> {
      this.menuList=response;
      },
      error=>{alert("error fetching Response: "+`${error}`)}
    )
  }

  getRestaurantName:any;
  getRestaurantAddress:any;

  // ----------------------------------------Methods for data transfer---------------------------------------
  restaurantDetails(data:any){
    this.getRestaurantName=data.restaurantName;
    this.getRestaurantAddress=data.restaurantAddress;
  }

  addFoodInformation(data:any){
    this.finalOrder.list.push(data);
    
    this.finalOrder.email = localStorage.getItem("email") || '';
    this.finalOrder.phoneNumber = parseInt(localStorage.getItem("phoneNumber") || '0'); 
    this.finalOrder.address = localStorage.getItem("address") || '';  
    
    this.finalOrder.restaurantName=this.getRestaurantName;
    this.finalOrder.restaurantAddress=this.getRestaurantAddress;

  }

  orderNow(){
    this.routing.navigate(['/order'], { state: { finalOrder: this.finalOrder } });
  }
}
