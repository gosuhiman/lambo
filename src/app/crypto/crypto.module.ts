import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpModule} from "@angular/http";
import {CoinmarketcapService} from "./coinmarketcap.service";
import {CoinInfoComponent} from './coin-info/coin-info.component';
import {CoinBadgeComponent} from './coin-badge/coin-badge.component';
import {MyCoinBadgeComponent} from './my-coin-badge/my-coin-badge.component';
import {FixerIoService} from "./fixer-io.service";

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
  ],
  providers: [
    CoinmarketcapService,
    FixerIoService
  ],
  declarations: [
    CoinInfoComponent,
    CoinBadgeComponent,
    MyCoinBadgeComponent
  ],
  exports: [
    CoinInfoComponent
  ]
})
export class CryptoModule {
}
