import {Component, Output, EventEmitter, Input, OnInit, OnDestroy, ViewEncapsulation} from '@angular/core' 
import { MenuItem , SpiceLevel} from '../models/app.menu.model';
import { NgForm } from '@angular/forms';

@Component ({
    selector:'menu-add',    
    styleUrls: ['../styles/app.menu.scss'],
    encapsulation: ViewEncapsulation.Emulated,
    template:`
    
<div class="card">
<div class="card-body" style="border:3px;background-color:#B8DAFF">
  <ng-content></ng-content>
  <hr>  
  <form (ngSubmit) = "onFormSubmit(addOrEditFormReference)" #addOrEditFormReference="ngForm">
  <div class="form-group row">
    <label for="menuNameName" class="col-sm-2 col-form-label">Name:</label>
    <div class="col-sm-10">
      <input type="text" class="form-control" 
        [(ngModel)]="menuItem.name" name="name1"  
        placeholder="Enter Name" 
        required #name="ngModel"> 
      <span class="help-block validationErrorMessage" 
        *ngIf="name.invalid && (name.dirty || name.touched)">Please enter valid Name! </span>
    </div>
    
    
  </div>
  <div class="form-group row">
    <label for="menuNameDesc" class="col-sm-2 col-form-label">Description:</label>
    <div class="col-sm-10">
      <input type="text" class="form-control" [(ngModel)]="menuItem.description" name= "description" placeholder="Enter Description">
    </div>
  </div>
  <div class="form-group row">
    <label for="menuNameIngrid" class="col-sm-2 col-form-label">Ingredients:</label>
    <div class="col-sm-10">
      <textarea  rows="2" class="form-control" [(ngModel)]="menuItem.ingredients" name= "ingredients" placeholder="Enter Ingredients"></textarea>
    </div>
  </div>
  
  <div class="form-group row">
    <label for="menuNameImage" class="col-sm-2 col-form-label">Menu Image:</label>
    <div class="col-sm-10">
      <textarea  class="form-control" rows="2" [(ngModel)]="menuItem.imageLocation" name= "imageLocation"
         placeholder="Enter Image Location (Please paste the real location , not search Image)" required></textarea>
    </div>
  </div>
  <div class="form-group row">
    
    <label for="menuItemPrice" class="col-sm-2 col-form-label">Price:</label>
    <div class="col-sm-10">
      <div class="input-group-prepend">
        <span class="input-group-text" id="inputGroupPrepend">$</span>
        <input type="number" [(ngModel)]="menuItem.price" name= "price" placeholder="Enter Price" required menuPriceValidation #price="ngModel"> 
        <span class="help-block validationErrorMessage" 
          *ngIf="price.invalid && ( price.touched)">Please enter Price > $9</span>
      </div>
    </div>
  </div>
  <div class="form-group row">
    <label for="menuItemID" class="col-sm-2 col-form-label">Spicy Level</label>
    <div class="col-sm-10">
      <select class="custom-select mr-sm-2" [(ngModel)]="menuItem.spiceLevel" name= "spiceLevel" required>
        <option value="HIGH">HIGH</option>
        <option value="MEDIUM">MEDIUM</option>
        <option value="LOW">LOW</option>
    </select>
    </div>
  </div>
  <div *ngIf = "addMenu">
    <button type="submit" class="btn btn-success float-right" [disabled]="!addOrEditFormReference.valid"> (+) Add </button>
  </div>
  <div *ngIf = "!addMenu">
    <button type="submit" (click) = "editNewMenuItem()" class="btn btn-warning float-right"> Save </button>
  </div>
  </form>
</div>

      
</div>

<!--<div class="card">
<div class="card-body" style="background-color:white">
  <ng-content></ng-content>
  <hr>  
  <div class="form-group row">
    <label for="menuNameName" class="col-sm-2 col-form-label">Name:</label>
    <div class="col-sm-10">
      <input type="text" class="form-control" [(ngModel)] = "menuItem.name" placeholder="Enter Name" required>
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
      <textarea  class="form-control" rows="2" [(ngModel)] = "menuItem.imageLocation"
         placeholder="Enter Image Location (Please paste the real location , not search Image)" required></textarea>
    </div>
  </div>
  <div class="form-group row">
    
    <label for="menuItemPrice" class="col-sm-2 col-form-label">Price:</label>
    <div class="col-sm-10">
      <div class="input-group-prepend">
        <span class="input-group-text" id="inputGroupPrepend">$</span>
        <input type="number" [(ngModel)] = "menuItem.price" placeholder="Enter Price" required>
      </div>
    </div>
  </div>
  <div class="form-group row">
    <label for="menuItemID" class="col-sm-2 col-form-label">Spicy Level</label>
    <div class="col-sm-10">
      <select class="custom-select mr-sm-2" [(ngModel)] = "menuItem.spiceLevel" required>
        <option value="HIGH">HIGH</option>
        <option value="MEDIUM">MEDIUM</option>
        <option value="LOW">LOW</option>
    </select>
    </div>
  </div>
  <div *ngIf = "addMenu">
    <button  (click) = "editNewMenuItem()" class="btn btn-success float-right"> (+) Add </button>
  </div>
  <div *ngIf = "!addMenu">
    <button (click) = "editNewMenuItem()" class="btn btn-warning float-right"> Save </button>
  </div>
  </form>
</div>

      
</div>-->
    
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

    onFormSubmit(form: NgForm) {
      console.log(form);
      console.log(form.value)
      console.log(this.menuItem);
      this.onAddNewMenuItem.emit(this.menuItem);
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