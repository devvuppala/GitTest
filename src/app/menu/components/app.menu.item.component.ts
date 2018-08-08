import {Component, Input, Output , EventEmitter, OnChanges} from '@angular/core' 
import {MenuService} from '../service/app.menu.service'

import {MenuItem, SpiceLevel} from '../models/app.menu.model'

@Component ({
    selector:'menu-item',    
    styleUrls: ['../styles/app.menu.scss'],
    template:`

   
    <ng-content></ng-content>
     <!--<input type="text" [(ngModel)] = "menuItem.itemPrice">
    <input type="text" [(ngModel)] = "menuItem.itemPrice">
    <button (click) = "emitChange()" clas="btn btn-success" >Emit</button>-->
    `
})

//This is my Menu Item Dumb component 
export class MenuItemComponent implements OnChanges{

    @Input() menuItem : MenuItem
    @Output() onChange: EventEmitter<MenuItem> = new EventEmitter<MenuItem>();

    ngOnChanges(changes) {
        console.log(this.menuItem.itemPrice);
        if(changes.menuItem) {
            this.menuItem = Object.assign({}, changes.menuItem.currentValue)
        }
    }
    emitChange() {
        console.log("Menu : " + this.menuItem.itemPrice);
        this.onChange.emit(this.menuItem);
    }


}