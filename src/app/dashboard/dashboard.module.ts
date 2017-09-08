import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from "@angular/router";
import {DashboardViewComponent} from './dashboard-view/dashboard-view.component';
import {routes} from "./routes";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DashboardViewComponent]
})
export class DashboardModule{
}
