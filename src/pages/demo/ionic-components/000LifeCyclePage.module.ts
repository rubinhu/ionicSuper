import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LifeCyclePage } from './000LifeCyclePage';

@NgModule({
  declarations: [
    LifeCyclePage,
  ],
  imports: [
    IonicPageModule.forChild(LifeCyclePage),
  ],
})
export class LifeCyclePageModule {}
