import {Component} from '@angular/core';
import {LoaderService} from "../../core/loader.service";
import {ViewComponent} from "../../core/view.component";

@Component({
  selector: 'app-dashboard-view',
  templateUrl: './dashboard-view.component.html',
  styleUrls: ['./dashboard-view.component.scss']
})
export class DashboardViewComponent extends ViewComponent {

  constructor(private _loaderService: LoaderService) {
    super();
  }

  ngOnInit() {
    this._loaderService.disable();
  }

}
