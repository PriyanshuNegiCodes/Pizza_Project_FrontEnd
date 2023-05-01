import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FinalOrder } from 'src/assets/orderDetails';
import { BillDetails, FoodList } from 'src/assets/BillingDetails';
import { FinalBillingService } from '../services/final-billing.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
@Component({
  selector: 'app-orderpage',
  templateUrl: './orderpage.component.html',
  styleUrls: ['./orderpage.component.css']
})
export class OrderpageComponent implements OnInit{

  finalBill: BillDetails = {
    email: '',
    phoneNumber: 0,
    address: '',
    restaurantName: '',
    restaurantAddress: '',
    list: [],
    grandTotal: 0
  }

  numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  constructor(private route: ActivatedRoute, private billing:FinalBillingService, private _snackBar: MatSnackBar, private routing: Router) { }

  ngOnInit() {

    const state = history.state;
  
    this.finalBill.email = state.finalOrder.email;
    this.finalBill.phoneNumber = state.finalOrder.phoneNumber;
    this.finalBill.address = state.finalOrder.address;
    this.finalBill.restaurantName = state.finalOrder.restaurantName;
    this.finalBill.restaurantAddress = state.finalOrder.restaurantAddress;
  


    for(let i=0; i<state.finalOrder.list.length; i++){
      const foodItem: FoodList = {
        category: state.finalOrder.list[i].category,
        price: state.finalOrder.list[i].price,
        name: state.finalOrder.list[i].name,
        quantity: 1 
      };
      this.finalBill.list.push(foodItem);
    }
    this.finalBill.grandTotal = state.finalOrder.grandTotal;
  }
  total(foodItem: FoodList): number {
    return foodItem.price * foodItem.quantity;
  }
  calculateGrandTotal() {
   return this.finalBill.grandTotal = this.finalBill.list.reduce((total, item) => total + (item.price * item.quantity), 0);
  } 

  checkOrderButton(){
    if(this.finalBill.grandTotal<100){
    //  this.openSnackBar("Order Value must be more than $100", "Ok")
      return false;

    }else{
      return true;
    }
  }
  
  placeOrder(){

    this.billing.addBillingDetails(this.finalBill).subscribe(
      response=>{
        console.log(response);
      },
      error=> {
        console.log(error);
      }

    );
    this.openSnackBar("Order Place Successfully", "Ok")
    this.finalBill.list=[];
    this.routing.navigate(['/menuComponent'] );
  }
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);

  }
}