import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit {
  message: string;
  someNumber: number = 2;

  constructor() {
    setInterval(() => {
      let currentDate = new Date();

      this.message =
        currentDate.toDateString() + ' ' + currentDate.toLocaleTimeString();
    }, 1000);
  }

  ngOnInit() {}

  //use this to access variables/methods in Typescript
  addTwoNumbersThenDouble(a: number, b: number) {
    return this.addTwoNumbers(a, b) * 2;
  }

  addTwoNumbers(a: number, b: number) {
    return a + b;
  }
}
