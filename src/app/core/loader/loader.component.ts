import {Component, OnInit} from '@angular/core';
import {trigger, state, style, animate, transition} from '@angular/animations';
import {LoaderService} from "../loader.service";

const fadeInTime: number = 400;

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
  animations: [
    trigger('state', [
      state('in', style({opacity: '1'})),
      transition('void => *', [
        style({opacity: '0'}),
        animate(fadeInTime)
      ]),
      transition('* => void', [
        animate(fadeInTime, style({opacity: '0'}))
      ])
    ])
  ]
})
export class LoaderComponent implements OnInit {

  enabled: boolean = true;

  constructor(private _loaderService: LoaderService) {
    this._loaderService.setAnimationTime(fadeInTime);
  }

  ngOnInit() {
    this._loaderService.enabled$.subscribe(enabled => {
      this.enabled = enabled;
    });
  }

}
