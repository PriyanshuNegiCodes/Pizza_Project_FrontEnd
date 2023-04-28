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
  addFoodInformation(data:any){
    this.finalOrder.list.push(data);
    
    console.log("--------------------------------------")
    console.log(localStorage.getItem("email"))
    console.log(localStorage.getItem("address"))
    let val = localStorage.getItem("phoneNumber")?.toString() || '';
    console.log(val)
    console.log("--------------------------------------")


    this.finalOrder.email = localStorage.getItem("email") || '';
    this.finalOrder.phoneNumber = parseInt(localStorage.getItem("phoneNumber") || '0'); 
    this.finalOrder.address = localStorage.getItem("address") || ''; 
    
    this.finalOrder.restaurantName=this.menuList.restaurantName;
    this.finalOrder.restaurantAddress=this.menuList.restaurantAddress;
    // this.finalOrder.grandTotal = this.finalOrder.list.reduce((total:any, item:any) => total + item.price, 0);

  }

  orderNow(){
    //alert(JSON.stringify(this.finalOrder))
    this.routing.navigate(['/order'], { state: { finalOrder: this.finalOrder } });
  }
}
