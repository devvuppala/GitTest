import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [
    CommonModule, FormsModule,BrowserModule, ReactiveFormsModule
  ],
  declarations: [SignupComponent],
  exports:[SignupComponent]
})
export class SignupandloginModule { }
