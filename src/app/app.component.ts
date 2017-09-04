import {Component, HostBinding, OnInit} from '@angular/core';
import {trigger, state, style, animate, transition} from '@angular/animations';
import {UiService} from "./core/ui.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('slideIn', [
      state('menuClosed', style({transform: 'translate(0, 0)'})),
      state('menuOpen', style({transform: 'translate(-140px, 0)'})),
      transition('menuClosed => menuOpen', [
        style({transform: 'translate(0, 0)'}),
        animate('200ms ease-in-out', style({transform: 'translate(-140px, 0)'}))
      ]),
      transition('menuOpen => menuClosed', [
        style({transform: 'translate(-140px, 0)'}),
        animate('200ms ease-in-out', style({transform: 'translate(0, 0)'}))
      ])
    ])
  ]
})
export class AppComponent implements OnInit {
  @HostBinding('@slideIn') state: string = 'menuClosed';

  constructor(private _uiService: UiService) {
  }

  ngOnInit() {
    this._uiService.menuOpen$.subscribe(isOpen => {
      if (isOpen) this.state = 'menuOpen';
      else this.state = 'menuClosed';
    });
  }
}
