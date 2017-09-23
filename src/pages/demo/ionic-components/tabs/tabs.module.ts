import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DemoTabsPage } from './tabs';

@NgModule({
  declarations: [
    DemoTabsPage,
  ],
  imports: [
    IonicPageModule.forChild(DemoTabsPage),
  ],
})
export class DemoTabsPageModule {}
