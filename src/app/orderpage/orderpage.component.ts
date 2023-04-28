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

  constructor(private route: ActivatedRoute, private billing:FinalBillingService, private _snackBar: MatSnackBar, private routing: Router) { }

  ngOnInit() {

    const state = history.state;
  
    this.finalBill.email = state.finalOrder.email;
    this.finalBill.phoneNumber = state.finalOrder.phoneNumber;
    this.finalBill.address = state.finalOrder.address;
    this.finalBill.restaurantName = state.finalOrder.restaurantName;
    this.finalBill.restaurantAddress = state.finalOrder.restaurantAddress;
    console.log(state.finalOrder.list[0].category)
    console.log(state.finalOrder.list[0].price)
    console.log(state.finalOrder.list[0].name)
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
  calculateGrandTotal(finalBill:any) {
   return this.finalBill.grandTotal = this.finalBill.list.reduce((total, item) => total + (item.price * item.quantity), 0);
  } 
  
  placeOrder(){
    console.log(this.finalBill);
    this.billing.addBillingDetails(this.finalBill).subscribe(
      response=>{
        console.log(response);
      },
      error=> {
        console.log(error);
      }

    );
    this.openSnackBar("Order Place Successfully", "Ok")
  }
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
    this.finalBill.list=[];
    this.routing.navigate(['/menuComponent'] );
  }
}