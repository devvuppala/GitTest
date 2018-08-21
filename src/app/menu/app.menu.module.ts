import {NgModule} from '@angular/core'
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'
import { MenuCatalogComponent } from './components/app.menu.smart.component';
import {MenuService} from './service/app.menu.service'
import { MenuItemComponent } from './components/app.menu.item.component';
import { MenuAddComponent } from './components/app.menu.add.component';
import {HttpClientModule} from '@angular/common/http'
import {HttpModule} from '@angular/http'
import { FireBaseMenuService } from './service/app.menu-firebase.service';
import { MenuPriceValidator } from './components/app.menu.custom.validator';
import { priceCurrencyPipe } from './components/app.menu.currency.pipe';
import { CurrencyDirective } from '../app-directives/app-currency.directive';
import { NotNgIfDirective } from '../app-directives/app-not-ngif.structrual.directive';
import {MyCurrencyConvertor} from '../app-pipes/app-currency.convertor'
import { MenuFilterPipe } from '../app-pipes/menu-filter.pipe';

@NgModule({
    imports:[BrowserModule, FormsModule, HttpClientModule,HttpModule],
    declarations :[MenuCatalogComponent, MenuItemComponent, MenuAddComponent,MenuPriceValidator, priceCurrencyPipe, 
        CurrencyDirective, NotNgIfDirective,MyCurrencyConvertor,MenuFilterPipe],        
    providers: [MenuService, FireBaseMenuService],
    exports:[MenuCatalogComponent]
})

export class MenuModule {

}