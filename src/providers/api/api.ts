import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ApiProvider {
  apiUrl = 'https://jsonplaceholder.typicode.com';
  constructor(public http: HttpClient) {
    console.log('Hello ApiProvider Provider');
  }
  get(endPoint: string) {
    return new Promise(resolve => {
      this.http.get(this.apiUrl + '/' + endPoint).subscribe(data => {
        console.log(data)
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }
}
