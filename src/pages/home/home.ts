import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { User1Page } from '../user1/user1';
import { User2Page } from '../user2/user2';
  @Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  onGoToUser1(){
    this.navCtrl.push(User1Page);

  }
  onGoToUsers2(){
    this.navCtrl.push(User2Page);
    
  }
}
