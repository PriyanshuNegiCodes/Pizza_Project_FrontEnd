import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginserviceService } from '../services/loginservice.service';
import { AuthenticationserviceService } from '../services/authenticationservice.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm:any|FormGroup;

  constructor(private login: LoginserviceService, private authService:AuthenticationserviceService,private _snackBar: MatSnackBar) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl('', Validators.required),
      phoneNumber: new FormControl('', Validators.required)
    });
  }

  responsedata:any;
  loginCustomer() {
    this.login.loginUser(this.loginForm.value).subscribe( response=>{

      console.log(response);
      this.responsedata=response;
      localStorage.setItem("jwt", this.responsedata.Token);
      localStorage.setItem("email",this.responsedata.email);
      localStorage.setItem("name",this.responsedata.name);
      localStorage.setItem("address",this.responsedata.address);
      localStorage.setItem("phoneNumber", this.responsedata.phoneNumber);

      console.log(localStorage.getItem("jwt"));

    }, error=> alert(error))
    
    if(localStorage.getItem("jwt")!=""){
      this.authService.loggedIn();
      this.openSnackBar("SuccessFully Logged In", "Ok")
    }else{
      this.authService.loggedOut();
      this.openSnackBar("invalid login details", "Ok")
    }
  }
  logout(){
    this.authService.loggedOut();
    this.loginForm.reset();
    this.openSnackBar("SuccessFully Logged Out", "Ok")
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }
}
