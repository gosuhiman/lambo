import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import {Observable} from "rxjs/Observable";

@Injectable()
export class LoaderService {

  enabled$: BehaviorSubject<boolean> = new BehaviorSubject(true);

  private _time: number = 0;

  constructor() {

  }

  setAnimationTime(time: number) {
    this._time = time;
  }

  enable() {
    this.enabled$.next(true);
    return Observable.timer(this._time);
  }

  disable() {
    this.enabled$.next(false);
    return Observable.timer(this._time);
  }

}
