import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, Validators, FormArray  } from '@angular/forms';
import { User } from '../app.user.model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {


  signUpReactiveForm: FormGroup ;
  states: String[];
  regUser: User;
  constructor() { 

  }

  ngOnInit() {
    this.signUpReactiveForm = new FormGroup({
      'emailID' : new FormControl(null, [Validators.required, Validators.email]),
      'password' : new FormControl(null,[Validators.required, this.validatePassword.bind(this)]),
      'userType' : new FormControl(null,[Validators.required]),
      'address' : new FormControl(null,[Validators.required]),
      'address2' : new FormControl(null),
      'city' : new FormControl(null,[Validators.required]),
      'state' : new FormControl(null,[Validators.required]),
      'zipCode' : new FormControl(null,[Validators.required])/*,
      'favFood' : new FormArray([])*/
    });

    this.states = this.populateStates();

    this.signUpReactiveForm.valueChanges.subscribe(
      (value) => console.log(value)
    )

    this.signUpReactiveForm.statusChanges.subscribe(
      (status) => console.log(status)
    )
  }

  onRegristrationFormSubmit() {
    console.log(this.signUpReactiveForm.value.zipCode)
  }

  onAddFavFood() {
    const controlValue: FormControl = new FormControl(null);
    (<FormArray>this.signUpReactiveForm.get('favFood')).push(controlValue);
  }

  validatePassword(control : FormControl): {[s:string] : boolean} {
    //console.log(control.value.length);
    if(control.value == null || control.value.length < 9) {
      return {'passwordValidator': true}
    }
    return null;
  }
  populateStates() : string[] {
    
      let state: string[]  = [];
      state.push('AL');
      state.push('AK');
      state.push('AZ');
      state.push('AR');
      state.push('CA');
      state.push('CO');
      state.push('CT');
      state.push('DE');
      state.push('FL');
      state.push('GA');
      state.push('HI');
      state.push('ID');
      state.push('IL');
      state.push('IN');
      state.push('IA');
      state.push('KS');
      state.push('KY');
      state.push('LA');
      state.push('ME');
      state.push('MD');
      state.push('MA');
      state.push('MI');
      state.push('MN');
      state.push('MS');
      state.push('MO');
      state.push('MT');
      state.push('NE');
      state.push('NV');
      state.push('NH');
      state.push('NJ');
      state.push('NM');
      state.push('NY');
      state.push('NC');
      state.push('ND');
      state.push('OH');
      state.push('OK');
      state.push('OR');
      state.push('PA');
      state.push('RI');
      state.push('SC');
      state.push('SD');
      state.push('TN');
      state.push('TX');
      state.push('UT');
      state.push('VT');
      state.push('VA');
      state.push('WA');
      state.push('WV');
      state.push('WI');
      state.push('WY');
      return state;
 
   }
  

}
