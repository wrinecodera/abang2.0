import { Component } from '@angular/core';
import{ModalController} from 'ionic-angular';

import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  GoogleMapOptions,
  CameraPosition,
  MarkerOptions,
  Marker,
  Environment
} from '@ionic-native/google-maps';



@Component({
  selector: 'page-user1',
  templateUrl: 'user1.html',
})
export class User1Page {
  map: GoogleMap;
  constructor(private modalCtrl:ModalController) {
  }

  
  onGoToFilter(){
    const modalPage= this.modalCtrl.create('FilterPage', {}, {
      enterAnimation: 'modal-translate-up-enter',
      leaveAnimation: 'modal-translate-up-leave'
    });
    modalPage.onDidDismiss((data: any) => {
    });
    
    modalPage.present();

  }
  ionViewDidLoad() {
    this.loadMap();
  }

  loadMap() {

    // This code is necessary for browser
    Environment.setEnv({
      'API_KEY_FOR_BROWSER_RELEASE': 'AIzaSyBv0UmuFOwhuIVMYK9X9RuaeqcgLJMC-k4',
      'API_KEY_FOR_BROWSER_DEBUG': 'AIzaSyBv0UmuFOwhuIVMYK9X9RuaeqcgLJMC-k4'
    });

    let mapOptions: GoogleMapOptions = {
      camera: {
         target: {
           lat: 10.302870,
           lng: 123.892940
         },
         zoom: 18,
         tilt: 30
       }
    };

    this.map = GoogleMaps.create('map_canvas', mapOptions);

    let marker: Marker = this.map.addMarkerSync({
      title: 'Ionic',
      icon: 'blue',
      animation: 'DROP',
      position: {
        lat: 10.302292,
        lng: 123.893222
      }
    });
    
    marker.on(GoogleMapsEvent.MARKER_CLICK).subscribe(() => {
      alert('clicked');
    });
  
}
}