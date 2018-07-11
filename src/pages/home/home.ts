import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  users: any;
  hostName: string = window.location.href; // .hostname;
  constructor(public navCtrl: NavController, public api: ApiProvider) {
    this.getUsers();
  }

  getUsers() {
    this.api.get('users')
      .then(data => {
        this.users = data;
        console.log(this.users);
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
    this.getUsers();
  }

}
