import {Injectable} from '@angular/core';
import {Http, Headers} from "@angular/http";
import {BittrexCoinBalance} from "./bittrex-coin-balance";
import * as _ from "lodash";
import * as jsSHA from "jssha";
import {BittrexApiResponse} from "./bittrex-api-response";
import {Observable} from "rxjs/Observable";

@Injectable()
export class BittrexService {
  apiEndpoint: string = 'https://bittrex.com/api/v1.1/account/getbalances';
  apiKey: string = 'a';
  apiSecret: string = 'b';

  constructor(private _http: Http) {
  }

  getBalances(): Observable<BittrexCoinBalance[]> {
    let nonce = Date.now();
    let uri = this.apiEndpoint + '?apikey=' + this.apiKey + '&nonce=' + nonce;
    let shaObj = new jsSHA('SHA-512', 'TEXT');
    shaObj.setHMACKey(this.apiSecret, 'TEXT');
    shaObj.update(uri);
    let hmac = shaObj.getHMAC('HEX');
    let headers: Headers = new Headers();
    headers.set('apisign', hmac);

    return this._http.get(uri, {headers: headers})
      .map(res => {
        let response: BittrexApiResponse = BittrexApiResponse.fromObject(res.json());
        if (response.success) {
          return _.map(response.result, balance => BittrexCoinBalance.fromObject(balance));
        } else {
          return null;
        }
      });
  }

}
