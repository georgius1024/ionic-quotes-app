import { Injectable } from '@angular/core';

/*
  Generated class for the ConfigProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ConfigProvider {
  apiUrl: string = 'https://seinfeld-quotes.herokuapp.com'; // Withjut ending slash!!!
  development: boolean = ['localhost', '127.0.0.1'].includes(String(window.location.href))
  constructor() {
    if (this.development) {
      console.log('ConfigProvider is in development mode');
    }
  }

}
