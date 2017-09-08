import {Component} from '@angular/core';
import {ViewComponent} from "../../core/view.component";
import {MyCoin} from "../my-coin";
import {Totals} from "../totals";
import {CoinmarketcapService} from "../coinmarketcap.service";

@Component({
  selector: 'app-wallet-view',
  templateUrl: './wallet-view.component.html',
  styleUrls: ['./wallet-view.component.scss']
})
export class WalletViewComponent extends ViewComponent {

  myCoins: MyCoin[];
  totals: Totals;

  constructor(private _coinMarketCapService: CoinmarketcapService) {
    super();
  }

  ngOnInit() {
    this._coinMarketCapService.myCoins$
      .filter(myCoins => typeof myCoins != 'undefined')
      .subscribe(myCoins => this.myCoins = myCoins);

    this._coinMarketCapService.totals$
      .subscribe(totals => this.totals = totals);
  }

  onRefreshClick() {
    this._coinMarketCapService.refresh();
  }

}
