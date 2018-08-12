import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {MenuModule}  from './menu/app.menu.module';
import { OrdersComponent } from './orders/orders.component';
import { HeaderComponent } from './header/header.component'
import {AngularFireModule} from 'angularfire2'
import {AngularFireDatabaseModule} from 'angularfire2/database'

import {environment} from '../environments/environment'

@NgModule({
  declarations: [
    AppComponent,
    OrdersComponent,
    HeaderComponent
  ],
  imports: [
    //Angular- Modules
    BrowserModule ,
    //App- Modules
    MenuModule,
    //Firebase
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
