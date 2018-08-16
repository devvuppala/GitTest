import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { FireBaseUserService } from './services/app.user.service';
import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [
    CommonModule, FormsModule,BrowserModule, ReactiveFormsModule
  ],
  declarations: [SignupComponent, LoginComponent],
  exports:[SignupComponent],
  providers:[FireBaseUserService]
})
export class SignupandloginModule { }
