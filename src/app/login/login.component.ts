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
      console.log(localStorage.getItem("jwt"));

    }, error=> alert(error))
    this.loginForm.reset();
  }
}
