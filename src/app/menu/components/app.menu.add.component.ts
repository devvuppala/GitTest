import {Component, Output, EventEmitter, Input, OnInit, OnDestroy} from '@angular/core' 
import { MenuItem , SpiceLevel} from '../models/app.menu.model';

@Component ({
    selector:'menu-add',    
    styleUrls: ['../styles/app.menu.scss'],
    template:`
    
<div class="card">
<div class="card-body" style="background-color:white">
  <ng-content></ng-content>
  <hr>
  <div class="form-group row">
    <label for="menuNameName" class="col-sm-2 col-form-label">Name:</label>
    <div class="col-sm-10">
      <input type="text" class="form-control" [(ngModel)] = "menuItem.name" placeholder="Enter Name">
    </div>
  </div>
  <div class="form-group row">
    <label for="menuNameDesc" class="col-sm-2 col-form-label">Description:</label>
    <div class="col-sm-10">
      <input type="text" class="form-control" [(ngModel)] = "menuItem.description" placeholder="Enter Description">
    </div>
  </div>
  <div class="form-group row">
    <label for="menuNameIngrid" class="col-sm-2 col-form-label">Ingredients:</label>
    <div class="col-sm-10">
      <textarea  rows="2" class="form-control" [(ngModel)] = "menuItem.ingredients" placeholder="Enter Ingredients"></textarea>
    </div>
  </div>
  
  <div class="form-group row">
    <label for="menuNameImage" class="col-sm-2 col-form-label">Menu Image:</label>
    <div class="col-sm-10">
      <textarea  class="form-control" rows="2" [(ngModel)] = "menuItem.imageLocation" placeholder="Enter Image Location (Please paste the real location , not search Image)"></textarea>
    </div>
  </div>
  <div class="form-group row">
    
    <label for="menuItemPrice" class="col-sm-2 col-form-label">Price:</label>
    <div class="col-sm-10">
      <div class="input-group-prepend">
        <span class="input-group-text" id="inputGroupPrepend">$</span>
        <input type="number" [(ngModel)] = "menuItem.price" placeholder="Enter Price">
      </div>
    </div>
  </div>
  <div class="form-group row">
    <label for="menuItemID" class="col-sm-2 col-form-label">Spicy Level</label>
    <div class="col-sm-10">
      <select class="custom-select mr-sm-2" [(ngModel)] = "menuItem.spiceLevel">
        <option value="HIGH">HIGH</option>
        <option value="MEDIUM">MEDIUM</option>
        <option value="LOW">LOW</option>
    </select>
    </div>
  </div>
  <div *ngIf = "addMenu">
    <button (click) = "addNewMenuItem()" class="btn btn-success float-right"> (+) Add </button>
  </div>
  <div *ngIf = "!addMenu">
    <button (click) = "editNewMenuItem()" class="btn btn-warning float-right"> Save </button>
  </div>
</div>

      
</div>
    
    `
})

//This is my Menu Smart component which interacts with the Service
export class MenuAddComponent implements OnInit, OnDestroy{

    @Output() onAddNewMenuItem : EventEmitter<MenuItem> = new EventEmitter<MenuItem>();
    @Output() onEditNewMenuItem : EventEmitter<MenuItem> = new EventEmitter<MenuItem>();
    @Input() menuItem: MenuItem
    @Input() addMenu: boolean

    
    ngOnInit() {
      console.log("ngOnInit" + this.menuItem.name + " addMenu :" + this.addMenu)
      if(this.addMenu) {
        this.menuItem = {
          $key: null,
          id : 0,
          name : '',
          description: '',
          ingredients: '',
          imageLocation:'',
          price:0,
          spiceLevel :'HIGH'
      }   
      }
    }

    addNewMenuItem() {
        console.log(this.menuItem)
        this.onAddNewMenuItem.emit(this.menuItem);
    }

    editNewMenuItem() {
      console.log(this.menuItem)
      this.onEditNewMenuItem.emit(this.menuItem);
    }

    ngOnDestroy() {
      console.log("ngOnDestroy")
      this.menuItem = {
        $key: null,
        id : 0,
        name : '',
        description: '',
        ingredients: '',
        imageLocation:'',
        price:0,
        spiceLevel :'HIGH'
      }
    }
}