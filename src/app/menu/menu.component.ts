import { Component, OnInit } from '@angular/core';
import { Orders } from 'src/assets/menu';
import { MenuserviceService } from '../services/menuservice.service';
import { FinalOrder } from 'src/assets/orderDetails';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  currentUserName=localStorage.getItem("name");
  currentUserEmail= localStorage.getItem("email");
  currentUserAddress=localStorage.getItem("address");
  currentUserPhoneNumber=localStorage.getItem("phoneNumber");

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


  constructor(private services:MenuserviceService, private routing: Router, private matSnackBar: MatSnackBar){}
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

    let addedData=this.finalOrder.list.some(
      item=>(
        item.name === data.name &&
        item.price === data.price &&
        item.category === data.category
      )
    )

    if(addedData){
      this.openSnackBar("The item is already in the cart", "Ok")
        }else{
      this.finalOrder.list.push(data);
    
      this.finalOrder.email = localStorage.getItem("email") || '';
      this.finalOrder.phoneNumber = parseInt(localStorage.getItem("phoneNumber") || '0'); 
      this.finalOrder.address = localStorage.getItem("address") || '';  
      
      this.finalOrder.restaurantName=this.getRestaurantName;
      this.finalOrder.restaurantAddress=this.getRestaurantAddress;
    }


  }

  orderNow() {
    if (this.finalOrder.list.length > 0) {
      this.routing.navigate(['/order'], { state: { finalOrder: this.finalOrder } });
    } else {
      this.openSnackBar("Please add items to the cart before placing an order", "Ok");
    }
  }


  // --------------------Code to order from one restaurant only---------------------------
  panelOpenState = false;
  hoveredIndex = -1;

  leaveAlert(){
    this.openSnackBar("You Can Only Order From One Restaurant at a Time", "Ok");
    }
    
    onMouseEnter(index: number) {
    this.hoveredIndex = index;
    }
    
    onMouseLeave() {
    this.hoveredIndex = -1;
    this.finalOrder= {
      email: '',
      phoneNumber: 0,
      address: '',
      restaurantName: '',
      restaurantAddress: '',
      list: [],
      grandTotal: 0
    }
    }
    
    isPanelOpen(index: number): boolean {
    return this.panelOpenState && this.hoveredIndex === index;
    }

    // -------------------------------This is the snack bar-------------------------------------------------
   
    openSnackBar(message: string, action: string) {
      this.matSnackBar.open(message, action);
      }
}
