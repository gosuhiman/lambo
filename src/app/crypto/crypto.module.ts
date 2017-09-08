import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpModule} from "@angular/http";
import {CoinmarketcapService} from "./coinmarketcap.service";
import {CoinBadgeComponent} from './coin-badge/coin-badge.component';
import {MyCoinBadgeComponent} from './my-coin-badge/my-coin-badge.component';
import {FixerIoService} from "./fixer-io.service";
import {RouterModule} from "@angular/router";
import {routes} from "./routes";
import {CurrenciesViewComponent} from './currencies-view/currencies-view.component';
import {WalletViewComponent} from './wallet-view/wallet-view.component';
import { SettingsViewComponent } from './settings-view/settings-view.component';

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
    CoinBadgeComponent,
    MyCoinBadgeComponent,
    CurrenciesViewComponent,
    WalletViewComponent,
    SettingsViewComponent
  ],
  exports: [
  ]
})
export class CryptoModule {
}
