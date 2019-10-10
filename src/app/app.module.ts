import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HelloWorldComponent} from './test/hello-world/hello-world.component';
import {DateComponent} from './test/date/date.component';
import {AddressCardComponent} from './test/address-card/address-card.component';
import {TestComponent} from './test/test.component';
import {ViewModule} from './view/view.module';
import {ViewComponentComponent} from './view/view-component/view-component.component';
import {TestService} from './test.service';
import {HttpClientModule} from '@angular/common/http';
import {LoginModule} from './login/login.module';

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    DateComponent,
    AddressCardComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ViewModule,
    HttpClientModule,
    LoginModule
  ],
  providers: [TestService],
  bootstrap: [AppComponent]
})
export class AppModule {}
