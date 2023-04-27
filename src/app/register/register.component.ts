import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RegistrationserviceService } from '../services/registrationservice.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerForm:any|FormGroup;

  constructor(private registration: RegistrationserviceService) { }

  ngOnInit() {
    this.registerForm = new FormGroup({
      email: new FormControl('', Validators.required),
      phoneNumber: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      name: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required)
    });
  }

  responsedata:any;
  registerCustomer() {
    this.registration.regsiterCustomer(this.registerForm.value).subscribe( response=>{

      console.log(response);
      this.responsedata=response;
      localStorage.setItem("jwt", this.responsedata.Token);
      console.log(localStorage.getItem("jwt"));

    }, error=> alert(error))
    this.registerForm.reset();
  }
}
