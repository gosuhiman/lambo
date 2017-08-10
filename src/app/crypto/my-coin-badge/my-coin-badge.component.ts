import {Component, Input, OnInit} from '@angular/core';
import {MyCoin} from "../my-coin";

@Component({
  selector: 'app-my-coin-badge',
  templateUrl: './my-coin-badge.component.html',
  styleUrls: ['./my-coin-badge.component.scss']
})
export class MyCoinBadgeComponent implements OnInit {

  @Input() myCoin: MyCoin;

  constructor() {
  }

  ngOnInit() {
  }

}
