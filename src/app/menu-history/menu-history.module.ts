import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuHistoryComponent } from './menu-history/menu-history.component';
import { RouterModule, Routes } from '@angular/router';

const menuHistoryRoutes:Routes = [
  { path:'' , component: MenuHistoryComponent}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(menuHistoryRoutes)
  ],
  declarations: [MenuHistoryComponent],
  exports:[MenuHistoryComponent],
  entryComponents:[]
})
export class MenuHistoryModule { 
  
}
