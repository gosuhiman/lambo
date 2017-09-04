import {Component, OnInit} from '@angular/core';
import {LoaderService} from "../../core/loader.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private _loaderService: LoaderService) {

  }

  ngOnInit() {
    this._loaderService.disable();
  }

}
