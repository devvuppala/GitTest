import {MenuItem, SpiceLevel} from '../models/app.menu.model'
import { HttpClient,HttpHeaders , HttpResponse} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map} from "rxjs/operators";

const MENU_SERVICE_URL:string = 'http://localhost:8999/restuarent/';
const FB_MENU_SERVICE: string = 'https://restuarant-1.firebaseio.com/MenuItem.json';
const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'my-auth-token'
    })
}

@Injectable()
export class MenuService {

    

    constructor(private http: HttpClient) {
        console.log(this.http);
    }

    getMenuItems() {
        return this.http.get(MENU_SERVICE_URL + 'getAllMenuItems');
    }

    addMenuItem(newMenuItem: MenuItem) {
       return this.http.post(MENU_SERVICE_URL + 'saveMenuItem', newMenuItem , httpOptions)
    }

    deleteMenuItem(menuenuItem: MenuItem) {
        return this.http.delete(MENU_SERVICE_URL + 'deleteMenuItem' + "/" + menuenuItem.itemID, httpOptions)
     }

     updateMenuItem(newMenuItem: MenuItem) {
        return this.http.put(MENU_SERVICE_URL + 'updateMenuItem', newMenuItem , httpOptions)
     }

     

    /*getMenuItemsFB(): Observable<MenuItem[]> {
        return this.http.get(FB_MENU_SERVICE)
            .pipe(map((response : Response) => (response)))
    }*/

    getMenuItemsFB() {
        return this.http.get(FB_MENU_SERVICE);
    }

    addMenuItemFB(newMenuItem: MenuItem) {
        return this.http.post(FB_MENU_SERVICE, newMenuItem , httpOptions)
     }
 
    deleteMenuItemFB(menuenuItem: MenuItem) {
         return this.http.delete(FB_MENU_SERVICE + "/" + menuenuItem.itemID, httpOptions)
      }
 
    updateMenuItemFB(newMenuItem: MenuItem) {
         return this.http.put(FB_MENU_SERVICE, newMenuItem , httpOptions)
      }
}