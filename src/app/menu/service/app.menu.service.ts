import {MenuItem, SpiceLevel} from '../models/app.menu.model'
import { HttpClient,HttpHeaders , HttpResponse} from '@angular/common/http';

import { Http, Headers , Response} from '@angular/http';
import { Injectable } from '@angular/core';
import {map} from "rxjs/operators";
import { Observable } from 'rxjs';
import { AngularFireDatabase , AngularFireList} from 'angularfire2/database';

const MENU_SERVICE_URL:string = 'http://localhost:8999/restuarent/';
const FB_MENU_SERVICE: string = 'https://restuarant-1.firebaseio.com/MenuItem.json';
const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'my-auth-token'
    })
}

const httpFBOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'my-auth-token'
    })
}

@Injectable()
export class MenuService {

    

    constructor(private http: HttpClient, private oldHttp: Http, private firebaseDB:AngularFireDatabase) {
        //console.log(this.http);
    }

    //Spring Boot Microservice
    getMenuItems() {
        return this.http.get(MENU_SERVICE_URL + 'getAllMenuItems');
    }

    addMenuItem(newMenuItem: MenuItem) {
       return this.http.post(MENU_SERVICE_URL + 'saveMenuItem', newMenuItem , httpOptions)
    }

    deleteMenuItem(menuenuItem: MenuItem) {
        return this.http.delete(MENU_SERVICE_URL + 'deleteMenuItem' + "/" + menuenuItem.id, httpOptions)
     }

     updateMenuItem(newMenuItem: MenuItem) {
        return this.http.put(MENU_SERVICE_URL + 'updateMenuItem', newMenuItem , httpOptions)
     }

    //Firebase without Angular Fire Base Plugin
    getMenuItemsFBWithoutFBDB() { 
        return this.http.get(FB_MENU_SERVICE);
    }

    addMenuItemFBWithoutFBDB(newMenuItem: MenuItem) {
         return this.http.post(FB_MENU_SERVICE, newMenuItem , httpOptions);
     }
 
    deleteMenuItemFBWithoutFBDB(menuenuItem: MenuItem) {
         return this.http.delete(FB_MENU_SERVICE + "/" + menuenuItem.id, httpOptions)
      }
 
    updateMenuItemFBWithoutFBDB(newMenuItem: MenuItem) {
         return this.http.patch(FB_MENU_SERVICE, newMenuItem , httpOptions)
    }

    //Firebase with AnfularFire2 Plugin
    menuItems: AngularFireList<any>

    getMenuItemsFB() { 
        this.menuItems =  this.firebaseDB.list('MenuItem');
        console.log(this.menuItems);
        return this.menuItems;
    }

    addMenuItemFB(newMenuItem: MenuItem) {
        newMenuItem.$key = null;
         let returnValue =  this.menuItems.push({
            id : newMenuItem.id,
            name : newMenuItem.name,
            description: newMenuItem.description,
            price : newMenuItem.price,
            spiceLevel: newMenuItem.spiceLevel,
            imageLocation: newMenuItem.imageLocation,
            ingredients: newMenuItem.ingredients
         });
         console.log(returnValue);
         return returnValue;
     }

 
    deleteMenuItemFB(menuItemToDelete: MenuItem) {
         return this.menuItems.remove(menuItemToDelete.$key)
      }
 
    updateMenuItemFB(newMenuItem: MenuItem) {
         return this.menuItems.update(newMenuItem.$key, {
            id : newMenuItem.id,
            name : newMenuItem.name,
            description: newMenuItem.description,
            price : newMenuItem.price,
            spiceLevel: newMenuItem.spiceLevel,
            imageLocation: newMenuItem.imageLocation,
            ingredients: newMenuItem.ingredients
         })
    }
}