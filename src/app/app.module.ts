import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {MenuModule}  from './menu/app.menu.module'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    //Angular- Modules
    BrowserModule ,
    //App- Modules
    MenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
