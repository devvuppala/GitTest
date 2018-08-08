import {Component, OnInit} from '@angular/core' 
import {MenuService} from '../service/app.menu.service'

import {MenuItem, SpiceLevel} from '../models/app.menu.model'

@Component ({
    selector:'menu-catalog',    
    styleUrls: ['../styles/app.menu.scss'],
    template:`
    Ternary / optional operator: {{menuItems?.length}}
    <hr>
    <button (click) = "enableAddDiv()" class="btn btn-primary"> Add New Item</button><br/><br/><br/>
    
    <div *ngIf = "showAddDiv">
        <menu-add (onAddNewMenuItem) = "addNewMenuItem($event)">
            <h3>This is going to be an {{menuItems?.length + 1}} th Dish</h3>
        </menu-add>        
        <br/><br/><br/>
    </div> 
    <ul class="list-group" *ngFor = "let item of menuItems ; let indx=index" >
        <menu-item [menuItem] = "item" (onChange) = "priceChangeEmitter($event)">
            <li class="list-group-item py-2"
                 [ngClass] = "{'list-group-item-primary' : indx%2 == 0 , 'list-group-item-success' : indx%2 == 1}">
            <div class="row">
                <div class = "col-sm">
                    <!--<figure class="figure" >-->
                        <img src="https://www.bing.com/th?id=OIP.GB6pCb9fp5S-hLyL-b-dagHaFN&w=297&h=209&c=7&o=5&pid=1.7"
                            style="width:50%;"
                            alt="Paneer Butter Masala.">
                        <!--<figcaption class="figure-caption">{{item.itemName}} : {{indx % 2}}</figcaption>
                    </figure>-->
                </div>
                <div class = "col-sm">
                {{item.itemName}} <br/>
                {{item.itemPrice}} <br/>
                Spicy Level: {{item.spiceLevel}} <br/>
                </div>
                <div class = "col-sm">
                    <button (click) = "deleteTheItem(item)" class="btn btn-danger float-right" >&nbsp;X&nbsp;</button>
                </div>
                </div>
            </li>
        </menu-item>
    </ul>
    <hr>
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
            //console.log(data);
            this.menuItems = data;
        })

        this.menuService.getMenuItemsFB().subscribe((response: Response) => {
            console.log(response);
           // this.menuItems = data;
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
            this.menuService.addMenuItemFB(newMenuItem).subscribe((menuItem : MenuItem) => {
                this.menuItems = [...this.menuItems,menuItem]
            })           
            this.showAddDiv = false;
        } catch {
            console.log("Error");
        }
    }

    deleteTheItem(selectedMenuItem:MenuItem) {
        this.menuService.deleteMenuItem(selectedMenuItem).subscribe((response:Response) => {
            console.log(response);
            this.menuItems = this.menuItems.filter(item => {
            console.log(item.itemID + " : " + selectedMenuItem.itemID);
                return item.itemID != selectedMenuItem.itemID
            });
        })
        
    }
}