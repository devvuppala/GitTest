import { HttpClient,HttpHeaders , HttpResponse} from '@angular/common/http';

import { Http, Headers , Response} from '@angular/http';
import { Injectable } from '@angular/core';
import {map} from "rxjs/operators";
import { Observable } from 'rxjs';
import { AngularFireDatabase , AngularFireList} from 'angularfire2/database';
import { User } from '../model/app.user.model';

const MENU_SERVICE_URL:string = 'http://localhost:8999/restuarent/';
const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'my-auth-token'
    })
}

@Injectable()
export class UserSpringBootService {

    

    constructor(private http: HttpClient, private oldHttp: Http, private firebaseDB:AngularFireDatabase) {
        //console.log(this.http);
    }

    //Spring Boot Microservice
    getUsers() {
        return this.http.get(MENU_SERVICE_URL + 'getAllUsers');
    }

    addUser(newUser: User) {
       return this.http.post(MENU_SERVICE_URL + 'saveUser', newUser , httpOptions)
    }

    deleteUser(user: User) {
        return this.http.delete(MENU_SERVICE_URL + 'deleteUser' + "/" + user.id, httpOptions)
     }

     updateUser(user: User) {
        return this.http.put(MENU_SERVICE_URL + 'validateUser', user , httpOptions)
     }
     
     validateUser(emailID: string , password : string) {
         return this.http.get(MENU_SERVICE_URL + 'validateUser/' + emailID + '/' + password);
     }

     checkEmailTaken(emailID: string) {
        return this.http.get(MENU_SERVICE_URL + 'checkEmailTaken/' + emailID);
    }
}