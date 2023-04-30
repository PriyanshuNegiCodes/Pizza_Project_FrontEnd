import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MenuComponent } from './menu/menu.component';
import { OrderpageComponent } from './orderpage/orderpage.component';
import { CanActivateGuard } from './services/can-activate.guard';
import { OrderHistoryComponent } from './order-history/order-history.component';

const routes: Routes = [
{path:'', redirectTo:'/loginComponent', pathMatch:'full'},
{path: 'loginComponent', component:LoginComponent},
{path: 'register', component:RegisterComponent},
{path: 'menuComponent', component:MenuComponent, canActivate:[CanActivateGuard]},
{path: 'order', component: OrderpageComponent},
{path: 'orderHistory', component: OrderHistoryComponent, canActivate:[CanActivateGuard]}

];
// , canActivate:[CanActivateGuard]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
