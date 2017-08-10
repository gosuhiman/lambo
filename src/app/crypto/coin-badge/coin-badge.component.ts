import {Component, Input, OnInit} from '@angular/core';
import {Coin} from "../coin";

@Component({
  selector: 'app-coin-badge',
  templateUrl: './coin-badge.component.html',
  styleUrls: ['./coin-badge.component.scss']
})
export class CoinBadgeComponent implements OnInit {

  @Input() coin: Coin;

  constructor() {
  }

  ngOnInit() {
  }

}
