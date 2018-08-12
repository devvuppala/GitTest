import {MenuItem, SpiceLevel} from '../models/app.menu.model'
import { Injectable } from '@angular/core';
import { AngularFireDatabase , AngularFireList} from 'angularfire2/database';


@Injectable()
export class FireBaseMenuService {

    constructor(private firebaseDB:AngularFireDatabase) {
        //console.log(this.http);
    }
   
    //Firebase with AnfularFire2 Plugin
    menuItems: AngularFireList<any>

    getMenuItemsFB() { 
        this.menuItems =  this.firebaseDB.list('MenuItem');
        //console.log(this.menuItems);
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
         //console.log(returnValue);
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