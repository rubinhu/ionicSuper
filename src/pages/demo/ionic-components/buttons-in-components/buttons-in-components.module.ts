import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ButtonsInComponentsPage } from './buttons-in-components';

@NgModule({
  declarations: [
    ButtonsInComponentsPage,
  ],
  imports: [
    IonicPageModule.forChild(ButtonsInComponentsPage),
  ],
})
export class ButtonsInComponentsPageModule {}
