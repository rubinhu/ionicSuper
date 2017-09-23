import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-000LifeCyclePage',
  templateUrl: '000LifeCyclePage.html',
})
export class LifeCyclePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LifeCyclePage.html');
  }

  /* （二）Ionic页面的生命周期 */
  // 页面被加载完成后调用的函数，切换页面时并不会进行重新加载，因为有cache的存在
  onPageLoaded() {
    console.log('page 1: page loaded.');
  }

  // 页面即将进入的时候
  onPageWillEnter() {
    // 在这里可以做页面初始化的一些事情
    console.log('page 1: page will enter.');
  }

  // 页面已经进入的时候
  onPageDidEnter() {
    console.log('page 1: page did enter.');
  }

  // 页面即将离开的时候
  onPageWillLeave() {
    console.log('page 1: page will leave.');
  }

  // 页面已经离开的时候
  onPageDidLeave() {
    console.log('page 1: page did leave.');
  }

  // 从 DOM 中移除的时候执行的生命周期
  onPageWillUnload() {
  }

  // 从 DOM 中移除执行完成的时候
  onPageDidUnload() {
  }
}
