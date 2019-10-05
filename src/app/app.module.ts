import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HelloWorldComponent} from './hello-world/hello-world.component';
import {DateComponent} from './date/date.component';
import {AddressCardComponent} from './address-card/address-card.component';
import {TestComponent} from './test/test.component';
import {ViewModule} from './view/view.module';
import {ViewComponentComponent} from './view/view-component/view-component.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    DateComponent,
    AddressCardComponent,
    TestComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ViewModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
