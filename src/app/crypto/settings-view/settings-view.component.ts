import {Component} from '@angular/core';
import {ViewComponent} from "../../core/view.component";
import {LoaderService} from "../../core/loader.service";

@Component({
  selector: 'app-settings-view',
  templateUrl: './settings-view.component.html',
  styleUrls: ['./settings-view.component.scss']
})
export class SettingsViewComponent extends ViewComponent {

  constructor(private _loaderService: LoaderService) {
    super();
  }

  ngOnInit() {
    this._loaderService.disable();
  }

}
