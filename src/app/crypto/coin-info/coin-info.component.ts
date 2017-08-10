import {Component, OnInit} from '@angular/core';
import {CoinmarketcapService} from "../coinmarketcap.service";
import {Coin} from "../coin";
import {MyCoin} from "../my-coin";

import {Totals} from "../totals";

@Component({
  selector: 'app-coin-info',
  templateUrl: './coin-info.component.html',
  styleUrls: ['./coin-info.component.scss']
})
export class CoinInfoComponent implements OnInit {

  coins: Coin[];
  myCoins: MyCoin[];
  totals: Totals;

  constructor(private _coinMarketCapService: CoinmarketcapService) {
  }

  ngOnInit() {
    this._coinMarketCapService.coins$
      .filter(coins => typeof coins != 'undefined')
      .subscribe(coins => this.coins = coins);

    this._coinMarketCapService.myCoins$
      .filter(myCoins => typeof myCoins != 'undefined')
      .subscribe(myCoins => this.myCoins = myCoins);

    this._coinMarketCapService.totals$
      .subscribe(totals => this.totals = totals);
  }

}
