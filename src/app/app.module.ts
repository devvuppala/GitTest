import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import {MenuModule}  from './menu/app.menu.module';
import { OrdersComponent } from './orders/orders.component';
import { HeaderComponent } from './header/header.component'
import {AngularFireModule} from 'angularfire2'
import {AngularFireDatabaseModule} from 'angularfire2/database'

import {environment} from '../environments/environment'
import { SignupandloginModule } from './signupandlogin/signupandlogin.module';

@NgModule({
  declarations: [
    AppComponent,
    OrdersComponent,
    HeaderComponent
  ],
  imports: [
    //Angular- Modules
    BrowserModule ,
    FormsModule,
    //App- Modules
    MenuModule,
    SignupandloginModule,
    //Firebase
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
