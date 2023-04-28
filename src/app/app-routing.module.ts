import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MenuComponent } from './menu/menu.component';
import { OrderpageComponent } from './orderpage/orderpage.component';

const routes: Routes = [
{path: 'loginComponent', component:LoginComponent},
{path: 'register', component:RegisterComponent},
{path: 'menuComponent', component:MenuComponent},
{path: 'order', component: OrderpageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
