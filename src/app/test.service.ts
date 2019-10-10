import {Injectable} from '@angular/core';
//@Injectable says it is a service
//@Component says it is a component
//@NgModule says it is a module
@Injectable({
  providedIn: 'root'
})
export class TestService {
  constructor() {}

  printToConsole(arg) {
    console.log(arg);
  }
}
