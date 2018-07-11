import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConfigProvider } from '../config/config'

/*
  Generated class for the ApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ApiProvider {
  apiUrl: string;
  constructor(public http: HttpClient, config: ConfigProvider) {
    this.apiUrl = config.apiUrl;
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
