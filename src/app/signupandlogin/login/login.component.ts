import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FireBaseUserService } from '../services/app.user.service';
import { User } from '../model/app.user.model';
import { Router } from '@angular/router';
import { UserSpringBootService } from '../services/app.user.springboot.service';
import { error } from '@angular/compiler/src/util';
import { Subject } from 'rxjs/Subject';
import { AppLanguageService } from '../../app-shared-service/app.shared.language.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],  
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {

  userNotFound:Boolean =  false;

  constructor(private userService: FireBaseUserService ,
              private router: Router,
              private userSpringBootService: UserSpringBootService,
              private appLanguageService: AppLanguageService ) {

   }

  ngOnInit() {
  }

  loginTheUser(loginForm: NgForm) {
    /*const usersArr: User[] = [];
    console.log("invoked");
    let returnUser = this.userService.getUsers().snapshotChanges().subscribe(users => {
      users.forEach(users => {
        const userObj = users.payload
        let user = userObj.toJSON();
        usersArr.push(user as User)
      });
    })

    console.log("User : " , usersArr);
    usersArr.forEach(user => {
      console.log("User For Each: " + user.emailID);
      if(user.emailID === loginForm.value.emailID && user.password === loginForm.value.emailID) {
        sessionStorage.setItem('loggedInUser', user.emailID);
        this.router.navigate(['/menus']);
        console.log("Logged IN");
      } else {
        console.log("User not found IN");
        this.userNotFound = true;
      }
    })
    sessionStorage.setItem('loggedInUser', '')*/

    //Validate through Spring Boot Service
    let loginUser: User = {};
    this.userSpringBootService.validateUser(loginForm.value.emailID,loginForm.value.password)
      .subscribe((user:User) => {
        if(user != null) {
          sessionStorage.setItem('loggedInUser', user.completeName);
          sessionStorage.setItem('validSession', "true");
          this.appLanguageService.userName.next(user.completeName);
          this.appLanguageService.validUser.next("true");
          this.router.navigate(['/menus']);
          console.log("Logged IN");
        } else {
          console.log('user Not Found');
          sessionStorage.setItem('loggedInUser', null);
          sessionStorage.setItem('validSession', "false");
          this.appLanguageService.userName.next(null);
          this.appLanguageService.validUser.next("false");
          this.router.navigate(['/']);
          this.userNotFound = true;
        }
          
    } , error => {
      console.log('user Not Found');
      this.router.navigate(['/']);
      this.userNotFound = true;
    })
  }

  
  

}
