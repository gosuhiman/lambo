import {Injectable} from '@angular/core';
import {Http} from "@angular/http";
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import {Observable} from "rxjs/Observable";
import {Coin} from "./coin";

import * as _ from "lodash";
import {MyCoin} from "./my-coin";
import {FixerIoService} from "./fixer-io.service";
import {Totals} from "./totals";
import {LoaderService} from "../core/loader.service";

@Injectable()
export class CoinmarketcapService {

  myCoinsUrl: string = 'assets/coins.json';
  apiEndpoint: string = 'https://api.coinmarketcap.com/v1/ticker/';
  coins$: BehaviorSubject<Coin[]> = new BehaviorSubject([]);
  myCoins$: BehaviorSubject<MyCoin[]> = new BehaviorSubject([]);
  totals$: BehaviorSubject<Totals> = new BehaviorSubject(new Totals());

  constructor(private _http: Http,
              private _fixerIoService: FixerIoService,
              private _loaderService: LoaderService) {
    this.refresh();
  }

  public refresh() {
    this._loaderService.enable()
      .subscribe(() => {
        let totals = new Totals();
        this.coins$.next([]);
        this.myCoins$.next([]);

        this._getMyCoins()
          .subscribe(myCoins => {
            this.myCoins$.next(myCoins);

            _.forEach(myCoins, myCoin => {
              this._getCoinInfo(myCoin.id)
                .subscribe(coin => {
                  this.coins$.value.push(coin);
                  myCoin.setCoin(coin);

                  this._fixerIoService.usdToPln$
                    .subscribe(usdToPln => {
                      myCoin.amountPln = myCoin.amountUsd * usdToPln;
                      totals.usd += myCoin.amountUsd;
                      totals.btc += myCoin.amountBtc;
                      totals.pln += myCoin.amountPln;
                      totals.calculateLamboPercent();
                      this.totals$.next(totals);
                      setTimeout(() => {
                        this._loaderService.disable();
                      }, 1000);
                    });
                });
            });
          });
      });
  }

  private _getCoinInfo(coin: string): Observable<any> {
    let url = this.apiEndpoint + coin + '/';
    return this._http.get(url)
      .map(res => res.json())
      .map(infos => {
        if (Array.isArray(infos) && infos.length > 0) {
          return Coin.fromObject(infos[0]);
        } else {
          return Observable.throw(new Error());
        }
      });
  }

  private _getMyCoins(): Observable<any[]> {
    return this._http.get(this.myCoinsUrl)
      .map(res => res.json())
      .map(objs => {
        let myCoins: MyCoin[] = [];
        if (Array.isArray(objs)) {
          _.forEach(objs, obj => {
            myCoins.push(MyCoin.fromObject(obj));
          });
        }
        return myCoins;
      });
  }

}
