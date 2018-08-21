import { Component } from '@angular/core';
import { DevUser } from './app.user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tester';
  currentDate = new Date();
  

  siriUser: DevUser = {
    id : 1,
    userName : 'Dev',
    fName : 'Dev',
    emailID : 'dev@gmail.com',
    isAdmin: true
  };

  siriUsers: DevUser[] =[ 
  {
    id : 1,
    userName : 'Dev0',
    fName : 'Dev0',
    emailID : 'dev0@gmail.com',
    isAdmin: true
  } , {
    id : 1,
    userName : 'Dev1',
    fName : 'Dev1',
    emailID : 'dev1@gmail.com',
    isAdmin: true
  } , {
    id : 1,
    userName : 'Dev3',
    fName : 'Dev3',
    emailID : 'dev3@gmail.com',
    isAdmin: false
  }];
}
