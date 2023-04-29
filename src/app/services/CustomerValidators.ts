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
   
    // static contactCheck(control: FormControl) {
    //     const contact: string = control.value;
    //     if (contact && contact.length === 10) {
    //       return null;
    //     } else {
    //       return { contactError: true };
    //     }
    //   }
}   