import {MenuItem, SpiceLevel} from '../models/app.menu.model'
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const MENU_SERVICE_URL:string = 'http://localhost:8999/restuarent/';
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
        return this.http.delete(MENU_SERVICE_URL + 'saveMenuItem' + "/" + menuenuItem.itemID, httpOptions)
     }

     updateMenuItem(newMenuItem: MenuItem) {
        return this.http.put(MENU_SERVICE_URL + 'updateMenuItem', newMenuItem , httpOptions)
     }
}