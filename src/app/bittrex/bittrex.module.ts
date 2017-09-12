import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BittrexService} from "./bittrex.service";

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    BittrexService
  ],
  declarations: []
})
export class BittrexModule {
}
