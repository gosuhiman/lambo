import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {CoreModule} from "./core/core.module";
import {CryptoModule} from "./crypto/crypto.module";
import {AppComponent} from './app.component';
import "rxjs/add/operator/map";
import "rxjs/add/operator/filter";
import "rxjs/add/observable/timer";
import "rxjs/add/observable/interval";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    CryptoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
