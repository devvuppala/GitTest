import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import {MenuModule}  from './menu/app.menu.module';
import { OrdersComponent } from './orders/orders.component';
import { HeaderComponent } from './header/header.component'
import {AngularFireModule} from 'angularfire2'
import {AngularFireDatabaseModule} from 'angularfire2/database'

import {environment} from '../environments/environment'
import { SignupandloginModule } from './signupandlogin/signupandlogin.module';

import {RouterModule} from '@angular/router'
import { SignupComponent } from './signupandlogin/signup/signup.component';
import { MenuCatalogComponent } from './menu/components/app.menu.smart.component';
import { LoginComponent } from './signupandlogin/login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthorizationGuard } from './authorization-guard.service';


@NgModule({
  declarations: [
    AppComponent,
    OrdersComponent,
    HeaderComponent,
    PageNotFoundComponent
  ],
  imports: [
    //Angular- Modules
    BrowserModule ,
    FormsModule,
    //App- Modules
    MenuModule,
    SignupandloginModule,
    AppRoutingModule,
    //Firebase
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
  providers: [AuthorizationGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
