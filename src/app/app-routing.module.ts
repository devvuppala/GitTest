import { NgModule } from "@angular/core";

import { LoginComponent } from "./signupandlogin/login/login.component";
import { MenuCatalogComponent } from "./menu/components/app.menu.smart.component";
import { SignupComponent } from "./signupandlogin/signup/signup.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { RouterModule, Routes } from "@angular/router";
import { AuthorizationGuard } from "./authorization-guard.service";


const applicationRoutes: Routes = [
    {path: '' , canActivate:[AuthorizationGuard] ,component: LoginComponent},
    {path: 'signup' , canActivate:[AuthorizationGuard] ,component: SignupComponent},
    {path: 'menus' , canActivate:[AuthorizationGuard] ,component: MenuCatalogComponent},
    {path: 'menus/:id' , canActivate:[AuthorizationGuard] ,component: MenuCatalogComponent},
    {path: 'menuHistory' , loadChildren: './menu-history/menu-history.module#MenuHistoryModule'}, 
    //{path: 'menuHistory' , component:MenuHistoryComponent}, 
    {path: 'page-not-found' , component: PageNotFoundComponent},
    {path: '**' , redirectTo:'/page-not-found'}
  ]

@NgModule({
    imports: [
        RouterModule.forRoot(applicationRoutes)
    ],
    exports: [RouterModule]
})

export class AppRoutingModule {

}