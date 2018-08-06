import {NgModule} from '@angular/core'
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'
import { MenuCatalogComponent } from './components/app.menu.smart.component';
import {MenuService} from './service/app.menu.service'
import { MenuItemComponent } from './components/app.menu.item.component';
import { MenuAddComponent } from './components/app.menu.add.component';
import {HttpClientModule} from '@angular/common/http'

@NgModule({
    imports:[BrowserModule, FormsModule, HttpClientModule],
    declarations :[MenuCatalogComponent, MenuItemComponent, MenuAddComponent],
    providers: [MenuService],
    exports:[MenuCatalogComponent]
})

export class MenuModule {

}