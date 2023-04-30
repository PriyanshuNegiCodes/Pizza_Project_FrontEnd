import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginserviceService } from '../services/loginservice.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthnticationService } from '../services/authntication.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm:any|FormGroup;
  loggedIn=true;

  currentUserName=localStorage.getItem("name");
  currentUserEmail= localStorage.getItem("email");
  currentUserAddress=localStorage.getItem("address");
  currentUserPhoneNumber=localStorage.getItem("phoneNumber");

  constructor(private router:Router ,private login: LoginserviceService, private _snackBar: MatSnackBar, private authService: AuthnticationService) { }

  ngOnInit() {

    if (localStorage.getItem("jwt") == null) {
      this.loggedIn = false;
    }

  
    this.loginForm = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }

  responsedata:any;
  loginCustomer() {
    this.login.loginUser(this.loginForm.value).subscribe( response=>{
      this.responsedata=response;
      localStorage.setItem("jwt", this.responsedata.Token);
      localStorage.setItem("email",this.responsedata.email);
      localStorage.setItem("name",this.responsedata.name);
      localStorage.setItem("address",this.responsedata.address);
      localStorage.setItem("phoneNumber", this.responsedata.phone);
      this.currentStatus();
    }, error=> {

      alert(error)
      this.openSnackBar("There was error Login Try again", "Ok")  
    })
  }

  currentStatus(){
    if(localStorage.getItem("jwt")!=""){
      this.authService.loggedIn();
      this.openSnackBar("SuccessFully Logged In", "Ok")
      this.loggedIn=true;

      this.router.navigate(['/menuComponent']);


    }else {
      this.authService.loggedOut();
      this.openSnackBar("invalid login details", "Ok")
    }
  }


  logout(){
    localStorage.removeItem("jwt");
    localStorage.removeItem("email");
    localStorage.removeItem("name");
    localStorage.removeItem("address");
    localStorage.removeItem("phoneNumber");

    this.authService.loggedOut();
    this.loginForm.reset();
    this.openSnackBar("SuccessFully Logged Out", "Ok")
    this.loggedIn=false
  }
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }
}