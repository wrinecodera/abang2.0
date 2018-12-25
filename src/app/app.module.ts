import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { Config,IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { User1Page } from '../pages/user1/user1';
import { User2Page } from '../pages/user2/user2';

import { ModalTranslateEnterTransition } from '../transitions/on-enter-translate.transition';
import { ModalTranslateLeaveTransition } from '../transitions/on-leave-translate.transition';

import {  GoogleMaps, LocationService  } from '@ionic-native/google-maps';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    User1Page,
    User2Page
   
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    User1Page,
    User2Page
  ],
  providers: [
    StatusBar,
    SplashScreen,
     GoogleMaps,
     LocationService,
     
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {
  constructor(public config: Config) {
    this.setCustomTransitions();
}
  private setCustomTransitions() {
   this.config.setTransition('modal-translate-up-enter', ModalTranslateEnterTransition);
   this.config.setTransition('modal-translate-up-leave', ModalTranslateLeaveTransition);
}
}