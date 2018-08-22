import { AbstractControl, FormControl } from "@angular/forms";
import { Observable } from "rxjs";

export class signUpCustomValidator {
    //Password Validator (Pattern)
    static validatePassword(control: AbstractControl): {[s:string] : boolean} {
        let passwordEntered: string = control.value;
        //console.log("Pattern :" + control)
        if(passwordEntered != null && passwordEntered != "") {
            let pattern="^([a-zA-Z0-9]{9,15})$";
            if(!passwordEntered.match(pattern)) {
               return {patternNotMatched:true}
               //return null;
            } else {
                return null;
            }
        } else {
            return null;
        }
        
    }

    //Asyncronous Validator
    static validUserName(control: FormControl) : Promise<any> | Observable<any> {
        const promise = new Promise<any> ((resolve, reject) => {
            setTimeout(() => {
                if(control.value == 'dummy@test.com') {
                    resolve({'emailValidationError': true});
                } else {
                    resolve(null)
                }
            } , 1500)
        })
        return promise;
    }

    promiseTocheckUserName = new Promise((resolve, reject) => {
        //Call the service to check if the username exists
        //If exists , return something such that it adds a error
        //If does not exist return something as null
    })
}