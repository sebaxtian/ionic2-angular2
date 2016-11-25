import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { Camera } from 'ionic-native';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  base64Image = "assets/imgs/picture.png";

  constructor(public navCtrl: NavController) {
    console.log('Constructor de HomePage');
  }

  btnCamara() {
    console.log('Click sobre boton Camara');
    Camera.getPicture({destinationType: Camera.DestinationType.DATA_URL}).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64:
      console.log('Exito al usar camara');

      this.base64Image = 'data:image/jpeg;base64,' + imageData;
      
    }, (err) => {
      // Handle error
      console.log('Error al usar camara: ' + err);
    });
  }

  btnGaleria() {
    console.log('Click sobre boton Galeria');
    Camera.getPicture({sourceType: Camera.PictureSourceType.PHOTOLIBRARY, destinationType: Camera.DestinationType.DATA_URL}).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64:
      console.log('Exito al usar galeria');

      this.base64Image = 'data:image/jpeg;base64,' + imageData;
      
    }, (err) => {
      // Handle error
      console.log('Error al usar galeria: ' + err);
    });
  }

}
