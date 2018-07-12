import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {LoadingController, AlertController, ToastController} from 'ionic-angular'
import {ConfigProvider} from '../config/config'

/*
 Generated class for the ApiProvider provider.

 See https://angular.io/guide/dependency-injection for more info on providers
 and Angular DI.
 */
@Injectable()
export class ApiProvider {
  apiUrl: string;
  loading: any;

  constructor (public http: HttpClient, private config: ConfigProvider, private loadingCtrl: LoadingController, private alertCtrl: AlertController, private toastCtrl: ToastController) {
    this.apiUrl = this.config.apiUrl;
    console.log('Hello ApiProvider Provider');
  }

  setLoading () {
    this.loading = this.loadingCtrl.create({
      content: 'Работа с API...'
    });
    this.loading.present();
  }

  clearLoading () {
    this.loading.dismiss();
  }

  showError (error) {
    let alert = this.alertCtrl.create({
      title: 'Ошибка',
      subTitle: error
    });
    alert.present();
  }
  showMessage(text) {
    let toast = this.toastCtrl.create({
      message: text,
      duration: 3000,
      showCloseButton: true,
      closeButtonText: 'ОК',
      position: 'top'
    });

    toast.present();
  }
  get (endPoint: string) {
    this.setLoading()
    return new Promise(resolve => {
      this.http.get(this.apiUrl + '/' + endPoint).subscribe(data => {
        this.clearLoading();
        if (data.quote) {
          this.showMessage(data.quote)
        }
        resolve(data);

      }, error => {
        this.clearLoading();
        this.showError(error.message);
        console.log(error);
      });
    });
  }
}
