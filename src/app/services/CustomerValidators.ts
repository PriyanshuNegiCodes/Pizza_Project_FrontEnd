import { AbstractControl, FormControl, FormControlName, FormGroup, ValidationErrors } from "@angular/forms";

export class CustomValidators{
    
    static passwordMatchValidator(group:FormGroup){
        const password = group.get('password')?.value;
        const confirmPassword=group.get('Cpassword')?.value;

        if(password===confirmPassword){
            return null;
        }else{
            return {PasswordError:true};
        }
    }

    // static emailValidators(control: FormControl) {
    //     const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;
    //     const valid = emailRegex.test(control.value);
    //     return valid ? null : { EmailError: true };
    //   }
   
    static contactCheck(phoneNumber:FormControl){
        let contact:any=phoneNumber.value;
    
        if(contact.length==10 && (contact.startsWith(7)||contact.startsWith(8)||contact.startsWith(9))){
            return null;
        }else{
            return {contactError:true}
        }
    }

}   