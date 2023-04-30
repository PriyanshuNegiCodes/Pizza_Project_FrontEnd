import { Component, OnInit } from '@angular/core';
import { OrderHistoryService } from '../services/order-history.service';
import {OrderHistory} from '../../assets/OrderHistory' 

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.css']
})
export class OrderHistoryComponent implements OnInit {
  orderHistoryList:any;
  
  displayedColumns: string[] = ['OrderId', 'email', 'name', 'weight', 'symbol', 'orderItems', 'total'];

  constructor(private orderService:OrderHistoryService){}

  ngOnInit(){
      let email=localStorage.getItem("email");
      this.orderService.getOrderHistory(email).subscribe(

        response=>{ this.orderHistoryList=response
          console.log(this.orderHistoryList);
        },
        error=>{}
      )
  console.log(this.orderHistoryList);
  }

}
