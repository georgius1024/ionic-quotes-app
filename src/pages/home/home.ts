import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';
import {ConfigProvider} from '../../providers/config/config'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  quote: any;
  hostName: string = window.location.href; // .hostname;
  constructor(public navCtrl: NavController, public api: ApiProvider, private config: ConfigProvider,) {
  }

  getQuote() {
    const url = this.config.development ? 'random' : 'quote'
    this.api.get(url)
      .then(data => {
        this.quote = data;
        console.log(this.quote);
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
    this.getQuote();
  }

}
