import { Component, OnInit } from '@angular/core';
import { Orders } from 'src/assets/menu';
import { MenuserviceService } from '../services/menuservice.service';
import { FinalOrder } from 'src/assets/orderDetails';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  panelOpenState = false;


  menuList:Orders|any;

  finalOrder:FinalOrder|any

  constructor(private services:MenuserviceService){}
  ngOnInit() {
    return this.services.getMenu().subscribe(
      response=> {console.log(response)
      this.menuList=response;
      },
      error=>{alert("error fetching Response: "+`${error}`)}
    )
  }
  addFoodInformation(data:any){
    this.finalOrder.list.push(data);
  }

  orderNow(){

  
    this.finalOrder.email = localStorage.getItem("email");;
    this.finalOrder.phoneNumber = localStorage.getItem("phoneNumber");
    this.finalOrder.address= localStorage.getItem("address");;
    this.finalOrder.restaurantName=this.menuList.restaurantName;
    this.finalOrder.restaurantAddress=this.menuList.restaurantAddress;
    this.finalOrder.grandTotal = this.finalOrder.list.reduce((total:any, item:any) => total + item.price, 0);

    console.log(this.finalOrder);
  }
}
