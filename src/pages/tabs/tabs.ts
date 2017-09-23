import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController } from 'ionic-angular';
import {Tabs} from 'ionic-angular';  
import {Injectable, ViewChild} from '@angular/core';

import { Tab1Root } from '../pages';
import { Tab2Root } from '../pages';
import { Tab3Root } from '../pages';
import { DemoRoot } from '../pages';

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {
  @ViewChild('mainTabs') tabRef: Tabs;  

  tab1Root: any = Tab1Root;
  tab2Root: any = Tab2Root;
  tab3Root: any = Tab3Root;
  demoRoot: any = DemoRoot;

  tab1Title = " ";
  tab2Title = " ";
  tab3Title = " ";
  demoTitle = " ";

  constructor(public navCtrl: NavController, public translateService: TranslateService) {
    translateService.get(['TAB1_TITLE', 'TAB2_TITLE', 'TAB3_TITLE']).subscribe(values => {
      this.tab1Title = values['TAB1_TITLE'];
      this.tab2Title = values['TAB2_TITLE'];
      this.tab3Title = values['TAB3_TITLE'];
      // todo: add 多语言
      this.demoTitle = "Inoic Demo";
    });
  }

  ionViewDidEnter() {  
    // 默认首先进入tab页面  HTML： <ion-tabs selectedIndex="3"> 
    this.tabRef.select(1);  
  }  
}
