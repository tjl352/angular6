import {Component, Inject} from '@angular/core';
import {User} from './test/address-card/user.model';
import {TestService} from './test.service';
import {InjectSetupWrapper} from '@angular/core/testing';
import {ViewServiceService} from './view/view-service.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'angular6';
  user: User;
  inputText: string = '';
  //private svc: TestService;
  constructor(
    private svc: TestService,
    private viewSvc: ViewServiceService,
    private http: HttpClient
  ) {
    this.viewSvc.print();
    //this.svc = svc;
    //let svc = new TestService();//don't hard code
    //svc.printToConsole('hello');
    this.svc.printToConsole('hello');

    this.user = new User();
    this.user.name = 'Bobby Jones';
    this.user.title = 'Software Engineer';
    this.user.address = '111 Elm Street, Dallas, TX 75001';
    this.user.phone = ['972-343-3433'];
  }

  ngOnInit() {
    let observable = this.http.get(
      'https://api.github.com/users/koushikkothagal'
    );
    observable.subscribe(response => {
      console.log(response);
    });
  }
}
