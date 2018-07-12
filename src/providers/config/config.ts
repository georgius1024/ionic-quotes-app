import { Injectable } from '@angular/core';

/*
  Generated class for the ConfigProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ConfigProvider {
  apiUrl: string = 'https://seinfeld-quotes.herokuapp.com'; // Without ending slash!!!
  localHosts: Array<string> = ['localhost', '127.0.0.1'];
  development: boolean = this.localHosts.indexOf(window.location.hostname) > -1
  constructor() {
    if (this.development) {
      console.log('ConfigProvider is in development mode');
    }
  }

}
