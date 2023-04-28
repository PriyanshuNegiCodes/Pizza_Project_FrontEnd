import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FinalOrder } from 'src/assets/orderDetails';
@Component({
  selector: 'app-orderpage',
  templateUrl: './orderpage.component.html',
  styleUrls: ['./orderpage.component.css']
})
export class OrderpageComponent implements OnInit{

  finalOrder: FinalOrder = {
    email: '',
    phoneNumber: 0,
    address: '',
    restaurantName: '',
    restaurantAddress: '',
    list: [],
    grandTotal: 0
  }

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.finalOrder = history.state.finalOrder;
  }
}