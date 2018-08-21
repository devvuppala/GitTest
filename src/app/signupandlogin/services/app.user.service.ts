
import { Injectable } from '@angular/core';
import { AngularFireDatabase , AngularFireList} from 'angularfire2/database';
import { User } from '../model/app.user.model';



@Injectable()
export class FireBaseUserService {

    constructor(private firebaseDB:AngularFireDatabase) {
        //console.log(this.http);
    }
   
    //Firebase with AnfularFire2 Plugin
    users: AngularFireList<any>

    getUsers() { 
        this.users =  this.firebaseDB.list('user');
        //console.log(this.menuItems);
        return this.users;
    }

    addUser(newUser: User) {
        this.getUsers();
        newUser.$key = null;
        let userFromFireBase =  this.users.push({
            id : newUser.id,
            emailID : newUser.emailID,
            password : newUser.password,
            userType : newUser.userType,
            address : newUser.address,
            address2 : newUser.address2,
            city : newUser.city,
            state : newUser.state,
            zipCode : newUser.zipCode
        });
         console.log(userFromFireBase);
         return userFromFireBase;
     }

     getUserByEmailAndPassword(emailID , password) {
        this.getUsers()
        console.log(this.users);
        console.log(this.firebaseDB.database.ref('user'));
     }
 
    deleteMenuItemFB(userToDelete: User) {
         return this.users.remove(userToDelete.$key)
      }
 
    updateMenuItemFB(userToUpdate: User) {
         return this.users.update(userToUpdate.$key, {
            id : userToUpdate.id,
            emailID : userToUpdate.emailID,
            password : userToUpdate.password,
            userType : userToUpdate.userType,
            address : userToUpdate.address,
            address2 : userToUpdate.address2,
            city : userToUpdate.city,
            state : userToUpdate.state,
            zipCode : userToUpdate.zipCode
         })
    }
}