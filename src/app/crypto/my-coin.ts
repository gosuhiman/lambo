import {Coin} from "./coin";
import * as _ from "lodash";

export class MyCoin {
  id: string;
  amount: number;
  amountUsd: number;
  amountBtc: number;
  amountPln: number;
  coin: Coin;

  setCoin(coin: Coin) {
    this.coin = coin;
    this.amountUsd = this.amount * coin.price_usd;
    this.amountBtc = this.amount * coin.price_btc;
  }

  static fromObject(obj: any): MyCoin {
    let mc: MyCoin = new MyCoin();
    _.merge(mc, obj);
    return mc;
  }
}
