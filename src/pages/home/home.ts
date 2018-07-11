import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  quote: any;
  hostName: string = window.location.href; // .hostname;
  constructor(public navCtrl: NavController, public api: ApiProvider) {
  }

  getQuote() {
    this.api.get('random')
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
