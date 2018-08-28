import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { FireBaseUserService } from './services/app.user.service';
import { LoginComponent } from './login/login.component';
import { BasicFontDirective } from '../app-directives/app-font.directive';
import { UserSpringBootService } from './services/app.user.springboot.service';
import { AppLanguageService } from '../app-shared-service/app.shared.language.service';

@NgModule({
  imports: [
    CommonModule, FormsModule,BrowserModule, ReactiveFormsModule
  ],
  declarations: [SignupComponent, LoginComponent,BasicFontDirective],
  exports:[SignupComponent],
  providers:[FireBaseUserService, UserSpringBootService, AppLanguageService]
})
export class SignupandloginModule { }
