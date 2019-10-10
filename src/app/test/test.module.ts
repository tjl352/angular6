import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AddressCardComponent} from './address-card/address-card.component';
import {DateComponent} from './date/date.component';
import {HelloWorldComponent} from './hello-world/hello-world.component';

@NgModule({
  declarations: [AddressCardComponent, DateComponent, HelloWorldComponent],
  imports: [CommonModule]
})
export class TestModule {}
