import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs/BehaviorSubject";

@Injectable()
export class UiService {

  menuOpen$: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor() {
  }

  menuToggle() {
    this.menuOpen$.next(!this.menuOpen$.value);
  }

}
