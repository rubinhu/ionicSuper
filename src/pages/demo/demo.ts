import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController  } from 'ionic-angular';


/**
 * Generated class for the DemoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-demo',
  templateUrl: 'demo.html',
})
export class DemoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DemoPage');
  }

  gotoPage(toPage: string) {    
    this.navCtrl.push(toPage);
  }

  private str1: string = '1、 下载安装 Node.js <br/>';
  private str2: string = '2、 使用 npm install -g cordova ionic 命令安装Ionic和Cordova <br/>';
  private str3: string = '3、 安装Ionic 后，使用 ionic start ionicdemo 创建项目 <br/>';
  private str4: string = '4、 创建页面：ionic g page [PageName], 创建组件：ionic g component [ComponentName]…… <br/>';
  private str5: string = '5、 使用 ionic serve 运行项目 <br/>';
  private str6: string = '6、 使用 ionic platform add Android/iOS 可以添加手机平台的部署文件（ionic platform list 查看当前的平台信息） <br/>';
  private str7: string = '7、 Xcode导入ios部署文件或在cordova导入Android部署文件';
  private str: string;

  showMore() {
    let str = this.str1 + this.str2 + this.str3 + this.str4 + this.str5 + this.str6 + this.str7;
    let alert = this.alertCtrl.create({
      title: '（一）Ionic 的安装与运行',
      subTitle: this.str,
      buttons: ['OK']
    });
    alert.present();
  }

}
