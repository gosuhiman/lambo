import {Component} from '@angular/core';
import {ViewComponent} from "../../core/view.component";
import {Coin} from "../coin";
import {CoinmarketcapService} from "../coinmarketcap.service";

@Component({
  selector: 'app-currencies-view',
  templateUrl: './currencies-view.component.html',
  styleUrls: ['./currencies-view.component.scss']
})
export class CurrenciesViewComponent extends ViewComponent {

  coins: Coin[];

  constructor(private _coinMarketCapService: CoinmarketcapService) {
    super();
  }

  ngOnInit() {
    this._coinMarketCapService.coins$
      .filter(coins => typeof coins != 'undefined')
      .subscribe(coins => this.coins = coins);
  }

  onRefreshClick() {
    this._coinMarketCapService.refresh();
  }

}
