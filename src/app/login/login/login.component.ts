import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  result: any;

  constructor(private http: HttpClient) {}

  ngOnInit() {}

  login(username, password) {
    this.http.get('http://localhost:8080/customer/1').subscribe(result => {
      this.result = result;
      console.log('Username: ' + username + ' Password: ' + password + result);
    });
  }
}
