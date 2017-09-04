import {Component, OnInit} from '@angular/core';
import {UiService} from "../ui.service";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  constructor(private _uiService: UiService) {
  }

  ngOnInit() {
  }

  onMenuItemClick() {
    this._uiService.menuClose();
  }
}
