import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ToolbarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

// @IonicPage()
@Component({
  selector: 'page-toolbar',
  templateUrl: 'toolbar.html',
})
export class ToolbarPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ToolbarPage');
  }

  gotoPage(toPage: string) {
    this.navCtrl.push(toPage);
  }

}


@Component({
  selector: 'page-toolbarbuttonsintoolbars',
  templateUrl: 'toolbar-buttonsintoolbars.html',
})
export class ToolbarButtonsInToolbars {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
}

@Component({
  selector: 'page-toolbarchangingthecolor',
  templateUrl: 'toolbar-changingthecolor.html',
})
export class ToolbarChangingTheColor {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
}

@Component({
  selector: 'page-toolbarheader',
  templateUrl: 'toolbar-header.html',
})
export class ToolbarHeader {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
}

@Component({
  selector: 'page-toolbarsearchbarintoolbars',
  templateUrl: 'toolbar-searchbarintoolbars.html',
})
export class ToolbarSearchbarInToolbars {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
}

@Component({
  selector: 'page-toolbarbasic',
  templateUrl: 'toolbar-basic.html',
})
export class ToolbarBasic {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
}

@Component({
  selector: 'page-toolbarsegmentintoolbars',
  templateUrl: 'toolbar-segmentintoolbars.html',
})
export class ToolbarSegmentInToolbars {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
}