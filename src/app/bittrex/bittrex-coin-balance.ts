import * as _ from "lodash";

export class BittrexCoinBalance {
  Currency: string;
  Balance: number;
  Available: number;
  Pending: number;
  CryptoAddress: string;
  Requested: boolean;
  Uuid: any;

  static fromObject(obj: any): BittrexCoinBalance {
    let bcb: BittrexCoinBalance = new BittrexCoinBalance();
    _.merge(bcb, obj);
    return bcb;
  }
}
