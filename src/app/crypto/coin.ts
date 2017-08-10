import * as _ from "lodash";

export class Coin {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  price_usd: number;
  price_btc: number;
  volume_usd_24h: number;
  market_cap_usd: number;
  available_supply: number;
  total_supply: number;
  percent_change_1h: number;
  percent_change_24h: number;
  percent_change_7d: number;
  last_updated: number;

  static fromObject(obj: any): Coin {
    let c: Coin = new Coin();
    _.merge(c, obj);
    c.volume_usd_24h = obj['24h_volume_usd'];
    return c;
  }
}
