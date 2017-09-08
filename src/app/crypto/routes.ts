import {Routes} from "@angular/router";
import {CurrenciesViewComponent} from "./currencies-view/currencies-view.component";
import {WalletViewComponent} from "./wallet-view/wallet-view.component";
import {SettingsViewComponent} from "./settings-view/settings-view.component";

export const routes: Routes = [
  {
    path: 'wallet',
    component: WalletViewComponent
  },
  {
    path: 'currencies',
    component: CurrenciesViewComponent
  },
  {
    path: 'settings',
    component: SettingsViewComponent
  }
];
