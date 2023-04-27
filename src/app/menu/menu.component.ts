import { Component, OnInit } from '@angular/core';
import { Orders } from 'src/assets/menu';
import { MenuserviceService } from '../services/menuservice.service';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menuList:Orders|any;

  constructor(private services:MenuserviceService){}
  ngOnInit() {
    return this.services.getMenu().subscribe(
      response=> {console.log(response)
      this.menuList=response;
      },
      error=>{alert("error fetching Response: "+`${error}`)}
    )
  }
}
