import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {CryptoModule} from "./crypto/crypto.module";
import {AppComponent} from './app.component';
import "rxjs/add/operator/map";
import "rxjs/add/operator/filter";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CryptoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
