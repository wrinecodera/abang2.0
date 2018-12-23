import { Component } from '@angular/core';
import { IonicPage} from 'ionic-angular';
import {ViewController} from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-filter',
  templateUrl: 'filter.html',
})
export class FilterPage {
  structure: any = {lower: 2999, upper: 20999};
  constructor(private viewCtrl: ViewController) {
  }
  onChange(ev: any) {
    console.log('Changed', ev);
  }
onClose(){
  this.viewCtrl.dismiss();
}
filter = {}

logForm() {

  console.log('this.filter');
}
}
