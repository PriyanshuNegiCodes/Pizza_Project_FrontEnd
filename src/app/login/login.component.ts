import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginserviceService } from '../services/loginservice.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm:any|FormGroup;

  constructor(private login: LoginserviceService) { }

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
    this.loginForm.reset();
  }
}
