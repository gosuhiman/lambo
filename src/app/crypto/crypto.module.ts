import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpModule} from "@angular/http";
import {CoinmarketcapService} from "./coinmarketcap.service";
import {CoinInfoComponent} from './coin-info/coin-info.component';
import {CoinBadgeComponent} from './coin-badge/coin-badge.component';
import {MyCoinBadgeComponent} from './my-coin-badge/my-coin-badge.component';
import {FixerIoService} from "./fixer-io.service";
import {RouterModule} from "@angular/router";
import {routes} from "./routes";

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    RouterModule.forChild(routes)
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
