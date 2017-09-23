import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SelectPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-select',
  templateUrl: 'select.html',
})
export class SelectPage {
  gaming: string = "n64";
  gender: string = "f";
  os: string;
  music: string;
  month: string;
  year: number;

  musicAlertOpts: { title: string, subTitle: string };

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.musicAlertOpts = {
      title: '1994 Music',
      subTitle: 'Select your favorite'
    };
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SelectPage');
  }

  stpSelect() {
    console.log('STP selected');
  }
}
