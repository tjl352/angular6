import {Component} from '@angular/core';
import {User} from './address-card/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user: User;

  constructor() {
    this.user = new User();
    this.user.name = 'Bobby Jones';
    this.user.title = 'Software Engineer';
    this.user.address = '111 Elm Street, Dallas, TX 75001';
    this.user.phone = ['972-343-3433'];
  }
}
