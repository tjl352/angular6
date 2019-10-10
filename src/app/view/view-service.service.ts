import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ViewServiceService {
  constructor() {}

  print() {
    console.log('printed from view service');
  }
}
