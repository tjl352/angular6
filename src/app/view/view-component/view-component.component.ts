import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-view-component',
  templateUrl: './view-component.component.html',
  styleUrls: ['./view-component.component.css']
})
export class ViewComponentComponent implements OnInit {
  userName: string = '';
  response: any;

  constructor(private http: HttpClient) {}

  ngOnInit() {}

  search() {
    this.http
      .get('https://api.github.com/users/' + this.userName)
      .subscribe(response => {
        this.response = response;
        console.log(response);
      });
  }

  getCustomer() {
    this.http.get('http://localhost:8080/customer/1').subscribe(response => {
      this.response = response;
      console.log(response);
    });
  }
}
