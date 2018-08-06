import {Component, Output, EventEmitter} from '@angular/core' 
import { MenuItem , SpiceLevel} from '../models/app.menu.model';

@Component ({
    selector:'menu-add',    
    styleUrls: ['../styles/app.menu.scss'],
    template:`
    
<table border="1"  class="table"><tr><td>
  <div class="form-group row">
    <label for="menuNameID" class="col-sm-2 col-form-label">Name</label>
    <div class="col-sm-10">
      <input type="text" class="form-control-plaintext" [(ngModel)] = "menuItem.itemName" placeholder="Enter Name">
    </div>
  </div>
  <div class="form-group row">
    <label for="menuItemPrice" class="col-sm-2 col-form-label">Price</label>
    <div class="col-sm-10">
      <input type="number" [(ngModel)] = "menuItem.itemPrice" placeholder="Enter Name">
    </div>
  </div>
  <div class="form-group row">
    <label for="menuItemID" class="col-sm-2 col-form-label">ID</label>
    <div class="col-sm-10">
      <select class="custom-select mr-sm-2" [(ngModel)] = "menuItem.spiceLevel">
        <option value="1">HIGH</option>
        <option value="2">MEDIUM</option>
        <option value="3">LOW</option>
    </select>
    </div>
  </div>
  <div class="form-group row">
    <button (click) = "addNewMenuItem()" class="btn btn-warning"> (+) Add </button>
  </div>
</td></tr></table>
    
    `
})

//This is my Menu Smart component which interacts with the Service
export class MenuAddComponent {

    @Output() onAddNewMenuItem : EventEmitter<MenuItem> = new EventEmitter<MenuItem>();

    menuItem: MenuItem = {
        itemID : 0,
        itemName : '',
        itemPrice : 0,
        spiceLevel: SpiceLevel.HIGH
    }

    addNewMenuItem() {
        console.log(this.menuItem)
        this.onAddNewMenuItem.emit(this.menuItem);
    }
}