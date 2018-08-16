import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FireBaseUserService } from '../services/app.user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService: FireBaseUserService) {

   }

  ngOnInit() {
  }

  loginTheUser(loginForm: NgForm) {
    console.log("invoked");
    let returnUser = this.userService.getUserByEmailAndPassword(loginForm.value.emailID,loginForm.value.emailID.password);
    console.log(returnUser);
  }

}
