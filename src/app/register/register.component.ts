import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { RegistrationserviceService } from '../services/registrationservice.service';
import { CustomValidators } from '../services/CustomerValidators';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
 
  constructor(private registration: RegistrationserviceService, private fb:FormBuilder
    , private matSnackBar:MatSnackBar, private routing: Router
    ) { }

    phonePattern = /^[7-9]\d{9}$/;

    registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', [Validators.required, Validators.pattern(this.phonePattern)]],
      password: ['' ,[Validators.required]],
      Cpassword: ['', Validators.required],
      name:['', Validators.required],
      address: ['', Validators.required]
    }, {
      validators: [CustomValidators.passwordMatchValidator]
    });
  
  

  // ________________Code toe get the validations from form build___________________________________________
    get getEmail() {
      return this.registerForm.get('email');
    }
    
    get getPhoneNumber() {
      return this.registerForm.get('phoneNumber');
    }
    
    get getPassword() {
      return this.registerForm.get('password');
    }
    
    get getCPassword() {
      return this.registerForm.get('Cpassword');
    }
    
    get getName() {
      return this.registerForm.get('name');
    }
    
    get getAddress() {
      return this.registerForm.get('address');
    }
  



  // ------------- Code to register the customer finally-------------------------------------
  responsedata:any;
  registerCustomer() {
    this.registration.regsiterCustomer(this.registerForm.value).subscribe( response=>{

      console.log(response);
      this.responsedata=response;
      localStorage.setItem("jwt", this.responsedata.Token);
      console.log(localStorage.getItem("jwt"));

    }, error=> alert(error))
    this.registerForm.reset();

    this.openSnackBar("Your Account Was Created Succesfully Kindly Login Using Credentials", "Ok");
  }

  openSnackBar(message: string, action: string) {
    this.matSnackBar.open(message, action);
    this.routing.navigate(['/order']);

  }
}
