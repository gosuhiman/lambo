import {Injectable} from '@angular/core';
import {Http} from "@angular/http";
import {BehaviorSubject} from "rxjs/BehaviorSubject";

@Injectable()
export class FixerIoService {

  apiEndpoint: string = 'http://api.fixer.io/latest?base=USD&symbols=PLN';
  usdToPln$: BehaviorSubject<number> = new BehaviorSubject(undefined);

  constructor(private _http: Http) {
    this.refresh();
  }

  refresh() {
    this._http.get(this.apiEndpoint)
      .map(res => res.json())
      .subscribe(obj => {
        this.usdToPln$.next(obj.rates.PLN);
      });
  }

}
