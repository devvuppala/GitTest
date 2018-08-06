import {Component, OnInit} from '@angular/core' 
import {MenuService} from '../service/app.menu.service'

import {MenuItem, SpiceLevel} from '../models/app.menu.model'

@Component ({
    selector:'menu-catalog',    
    styleUrls: ['../styles/app.menu.scss'],
    template:`
    Ternary / optional operator: {{menuItems?.lenght}}
    <button (click) = "enableAddDiv()" class="btn btn-primary"> Add New Item</button><br/><br/><br/>
    
    <div *ngIf = "showAddDiv">
        <menu-add (onAddNewMenuItem) = "addNewMenuItem($event)"></menu-add>        
        <br/><br/><br/>
    </div> 
    <table border="1"  class="table  table-striped">
    <thead  class="thead-dark">
        <tr>
            <th>Item Name</th>
            <th>Price</th>
            <th>Spicy Level</th>
            <th>Action</th>
        </tr>
    </thead>
    <tbody>
        <tr   *ngFor = "let item of menuItems">
            <td>{{item.itemName}}</td>
            <td>{{item.itemPrice}}</td>
            <td>
            <div >
                {{item.spiceLevel}}
            </div>
            </td>
            <td>
                <button (click) = "deleteTheItem(item)"class="btn btn-outline-danger">&nbsp;X&nbsp;</button>
            </td>
        </tr>
    </tbody>
</table>
    
 <!--<div *ngFor = "let item of menuItems">
    <menu-item [menuItem] = "item" (onChange) = "priceChangeEmitter($event)"></menu-item>
 </div>-->
 
  
    
    `
})

//This is my Menu Smart component which interacts with the Service
export class MenuCatalogComponent implements OnInit{

    menuItems : MenuItem[]
    showAddDiv: boolean = false;
    //Dependecy Injection

    constructor(private menuService : MenuService) {
        
    }

    ngOnInit() {
        this.menuService.getMenuItems().subscribe((data: MenuItem[]) => {
            console.log(data);
            this.menuItems = data;
        })
    }

    priceChangeEmitter(menuItem: MenuItem) {
        console.log(menuItem);
       this.menuItems =  this.menuItems.map(target => {
            if(target.itemID === menuItem.itemID) {
                //return Object.assign({} , target, menuItem)
                target.itemPrice = menuItem.itemPrice;
            }
            return target;
        })
        console.log(this.menuItems)
    }

    enableAddDiv() {
        this.showAddDiv = true;
    }

    addNewMenuItem(newMenuItem: MenuItem) {
        console.log("newMenuItem: " + newMenuItem)
        try {
            //this.menuItems.push(newMenuItem);
            this.menuService.addMenuItem(newMenuItem).subscribe((menuItem : MenuItem) => {
                this.menuItems = [...this.menuItems,menuItem]
            })            
            this.showAddDiv = false;
        } catch {
            console.log("Error");
        }
    }

    deleteTheItem(selectedMenuItem:MenuItem) {
        this.menuItems = this.menuItems.filter(item => {
           console.log(item.itemID + " : " + selectedMenuItem.itemID);
            return item.itemID != selectedMenuItem.itemID
        });
    }
}