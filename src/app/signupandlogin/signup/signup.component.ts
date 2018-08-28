import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, Validators, FormArray  } from '@angular/forms';
import { signUpCustomValidator } from './signup.custom.validators';
import { User } from '../model/app.user.model';
import { FireBaseUserService } from '../services/app.user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { UserSpringBootService } from '../services/app.user.springboot.service';
import { Observable } from 'rxjs/Observable';
import { debounceTime } from 'rxjs/operators';
import { map } from 'rxjs-compat/operator/map';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {


  signUpReactiveForm: FormGroup ;
  states: String[];
  regUser: User = {
    $key: null,
    id : 0,
    completeName:null,
    emailID : null,
    password : null,
    userType : null,
    address : null,
    address2 : '',
    city : null,
    state : null,
    zipCode : null
  }

  signUpFormNotValid: boolean =  false;

  constructor(private fireBaseUserService : FireBaseUserService,
              private router : Router,
              private route : ActivatedRoute,
              private userSpringBootService: UserSpringBootService) { 

  }

  ngOnInit() {
    this.signUpReactiveForm = new FormGroup({
      'completeName': new FormControl(null, [Validators.required]),
      'emailID' : new FormControl(null, [Validators.required, Validators.email], 
                                    [this.isEmailUnique.bind(this)]//Asyncronous Validators
                                  ),
      'password' : new FormControl(null,[Validators.required, 
                                          signUpCustomValidator.validatePassword ] //Sync or regular validators
                                        
                                  ),
      'userType' : new FormControl(null,[Validators.required]),
      'address' : new FormControl(null,[Validators.required]),
      'address2' : new FormControl(null),
      'city' : new FormControl(null,[Validators.required]),
      'state' : new FormControl(null,[Validators.required]),
      'zipCode' : new FormControl(null,[Validators.required])/*,
      'favFood' : new FormArray([])*/
      
    });

    this.states = this.populateStates();

    /*this.signUpReactiveForm.valueChanges.subscribe(
      (value) => console.log(value)
    )*/

    /*this.signUpReactiveForm.statusChanges.subscribe(
      (status) => console.log(status)
    )*/

    // /this.signUpReactiveForm.reset;
  }

  onRegristrationFormSubmit() {
    //console.log(this.signUpReactiveForm)
    if(this.signUpReactiveForm.valid) {
      this.regUser.emailID = this.signUpReactiveForm.value.emailID;
      this.regUser.completeName = this.signUpReactiveForm.value.completeName;
      this.regUser.password = this.signUpReactiveForm.value.password;
      this.regUser.userType = this.signUpReactiveForm.value.userType;
      this.regUser.address = this.signUpReactiveForm.value.address;
      this.regUser.address2 = this.signUpReactiveForm.value.address2;
      this.regUser.city = this.signUpReactiveForm.value.city;
      this.regUser.state = this.signUpReactiveForm.value.state;
      this.regUser.zipCode = this.signUpReactiveForm.value.zipCode;
      //console.log(this.regUser);
      //let returnUser = this.fireBaseUserService.addUser(this.regUser);
      this.userSpringBootService.addUser(this.regUser).subscribe(user => {
        console.log(user);        
        this.router.navigate(['/'])
      });
      
      //this.router.navigate(['/menus'], {relativeTo: this.route})
    } else {
      this.signUpFormNotValid = true;
    }
    

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

  isEmailUnique(control: FormControl) {
    console.log("hurrrrrrrrraayyyrar : " + control.value)
    const q = new Observable(() => {
        this.userSpringBootService.checkEmailTaken(control.value).debounceTime(100).
            subscribe((emailTaken: boolean) => {
          console.log(emailTaken)
          if(emailTaken) {
            Observable.of({'emailTaken': true});
          } else {
            Observable.of(null)
          }
        })
    });
    return q;
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
