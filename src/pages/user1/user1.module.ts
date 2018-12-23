import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { User1Page } from './user1';

@NgModule({
  declarations: [
    User1Page,
  ],
  imports: [
    IonicPageModule.forChild(User1Page),
  ],
})
export class User1PageModule {}
