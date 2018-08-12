import {Component, OnInit} from '@angular/core' 
import {MenuService} from '../service/app.menu.service'

import {MenuItem, SpiceLevel} from '../models/app.menu.model'

import {Response} from '@angular/http'
import { FireBaseMenuService } from '../service/app.menu-firebase.service';

@Component ({
    selector:'menu-catalog',    
    styleUrls: ['../styles/app.menu.scss'],
    template:`
    <!--Ternary / optional operator: {{menuItems?.length}}
    <hr>-->
    
    <button *ngIf = "!showAddDiv" (click) = "enableAddDiv()" class="btn btn-primary float-right"> Add Menu</button>
    <br/><br/><br/>
    <div class=  "row">
    <div class="col-sm-6">
        <div *ngIf = "isError">
            <div class="alert alert-danger" role="alert">
                {{errorMessage}}
            </div>
        </div>
        <div class="progress" *ngIf="loadingMenuItemsInProgress">
        <div class="progress-bar progress-bar-striped" style="width:10%"></div>
    </div>
        <ul class="list-group" *ngFor = "let item of menuItems ; let indx=index" >
        
        <menu-item [menuItem] = "item" (onChange) = "priceChangeEmitter($event)" class="cursor: pointer;">
            <li class="list-group-item py-2"
                [ngClass] = "{'list-group-item-primary' : indx%2 == 0 , 'list-group-item-success' : indx%2 == 1}"
                (click) = "onItemClick(item)">
            <div class="row">
                <div class = "col-sm-3">
                    <!--<figure class="figure" >-->
                        <img [src]="item.imageLocation" class="img-thumbnail rounded float-left img-responsive"
                        style="height:100px"
                            [alt]="item.name">
                        <!--<figcaption class="figure-caption">{{item.itemName}} : {{indx % 2}}</figcaption>
                    </figure>-->
                </div>
                <div class = "col-sm-6">
                {{item.name}} <br/>
                {{item.price}} <br/>
                Spicy Level: {{item.spiceLevel}} <br/>
                </div>
                <div class = "col-sm-3">
                    <button (click) = "deleteTheItem(item)" class="btn btn-danger float-right" >&nbsp;X&nbsp;</button>
                </div>
                </div>
            </li>
        </menu-item>        
    </ul>
    </div>
    <div class="col-sm-6">
    <div *ngIf = "showAddDiv">
        <menu-add (onAddNewMenuItem) = "addNewMenuItem($event)" [menuItem] = "newMenuItem" [addMenu]="true">
           <h5 class="text-success">Add new menu (ID = {{menuItems?.length + 1}})
           <button *ngIf = "showAddDiv" (click) = "disableAddDiv()" class="btn btn-danger float-right"> X</button>
           </h5>          
            
        </menu-add>  
    </div> 
    <div *ngIf = "showEditDiv">
            <menu-add (onEditNewMenuItem) = "editNewMenuItem($event)" [menuItem] = "menuItemToEdit" [addMenu]="false">
            <h5 class="text-success">Edit : <i style="color:red">{{menuItemToEdit.name}}</i>
                <button *ngIf = "showEditDiv" (click) = "disableEditDiv()" class="btn btn-danger float-right">X</button>
            </h5>    
                
            </menu-add>  
        </div> 
    </div>
  
    
    `
})

//This is my Menu Smart component which interacts with the Service
export class MenuCatalogComponent implements OnInit{

    menuItems : MenuItem[]
    showAddDiv: boolean = false;
    showEditDiv: boolean = false;
    isError:boolean =  false;
    errorMessage:string = '';
    newMenuItem : MenuItem = {
        $key: null,
        id : 0,
        name : '',
        description: '',
        ingredients: '',
        imageLocation:'',
        price:0,
        spiceLevel :'HIGH'
    }
    menuItemToEdit: MenuItem;
    loadingMenuItemsInProgress:boolean = true;
    //Dependecy Injection

    constructor(private menuService : MenuService,
                private fireBaseMenuService: FireBaseMenuService) {
        
    }

    ngOnInit() {
        //Spring Boot Microservice
        /*this.menuService.getMenuItems().subscribe((data: MenuItem[]) => {
            console.log(data);
            //this.menuItems = data;
        })*/
        this.populateMenuItemsList();
        this.loadingMenuItemsInProgress = false;
                  
    }

    populateMenuItemsList() {
        this.fireBaseMenuService.getMenuItemsFB().snapshotChanges().subscribe(menuItem => {
            this.menuItems = [];
            menuItem.forEach(element => {
                var y = element.payload.toJSON();
                //console.log(y)
                y["$key"] = element.key;
                this.menuItems.push(y as MenuItem);
            });
            //console.log(this.menuItems);
        }, (error) => {
            //console.log(error);
            this.isError = true;
            this.errorMessage = "Error occourred while displaying Menu Items. Please Contact System Administrator";
        })  
    }


    priceChangeEmitter(menuItem: MenuItem) {
       //console.log(menuItem);
       this.menuItems =  this.menuItems.map(target => {
            if(target.id === menuItem.id) {
                //return Object.assign({} , target, menuItem)
                target.id = menuItem.id;
            }
            return target;
        })
        //console.log(this.menuItems)
    }

    enableAddDiv() {
        this.showAddDiv = true ;
        this.showEditDiv = false;     
    }

    disableAddDiv() {
        this.showAddDiv = false ;        
    }

    enableEditDiv() {
        this.showEditDiv = true ;
        this.showAddDiv = false;        
    }

    disableEditDiv() {
        this.showEditDiv = false ;        
    }


    addNewMenuItem(newMenuItem: MenuItem) {
        //Spring Boot Microservice
       /* this.menuService.addMenuItem(newMenuItem).subscribe((menuItem : MenuItem) => {
            this.menuItems = [...this.menuItems,menuItem]
        }) */
        let generatedID = this.menuItems != null ? (this.menuItems.length + 1) : 1;
        newMenuItem.id = generatedID;
        let returnValue = this.fireBaseMenuService.addMenuItemFB(newMenuItem);
        //console.log(returnValue);
        this.showAddDiv = false;
    }

    deleteTheItem(selectedMenuItem:MenuItem) {
        let returnValue = this.fireBaseMenuService.deleteMenuItemFB(selectedMenuItem);
        this.disableEditDiv();
        this.disableEditDiv();
        //console.log(returnValue);
    }

    onItemClick(selectedMenuItem:MenuItem) {
        //console.log("onItemClick: " + selectedMenuItem.name);
        this.menuItemToEdit = selectedMenuItem;
        this.disableAddDiv();
        this.enableEditDiv();
        
    }

    editNewMenuItem(menuItemToEdit: MenuItem) {
        let returnValue = this.fireBaseMenuService.updateMenuItemFB(menuItemToEdit);
        //console.log(returnValue);
        this.disableEditDiv();
    }
}