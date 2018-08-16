import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { Injectable } from "@angular/core";
import { FireBaseUserService } from "./signupandlogin/services/app.user.service";

@Injectable()
export class AuthorizationGuard implements CanActivate {

    constructor(private userService : FireBaseUserService,
                private router: Router) {

    }

    canActivate(route : ActivatedRouteSnapshot , 
                state: RouterStateSnapshot) : boolean {
         //Runs Synchronously or Asynchronously , sometimes may have to reach out a server    
        return true;  
        //  this.router.navigate(['/page-not-found']) 
        // return false;
    }

}