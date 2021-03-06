import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoaderComponent} from './loader/loader.component';
import {LoaderService} from "./loader.service";
import {MenuComponent} from './menu/menu.component';
import {UiService} from "./ui.service";
import {TopBarComponent} from './top-bar/top-bar.component';
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  providers: [
    UiService,
    LoaderService
  ],
  declarations: [
    LoaderComponent,
    MenuComponent,
    TopBarComponent
  ],
  exports: [
    LoaderComponent,
    MenuComponent,
    TopBarComponent
  ]
})
export class CoreModule {
}
