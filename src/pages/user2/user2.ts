import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';




@Component({
  selector:'page-user2',
    templateUrl:'user2.html',
})
export class User2Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad User2Page');
  }

}
