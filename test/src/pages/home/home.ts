import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
    console.log('Constructor Home Page');
  }

  testConsole() {
    console.log('Click on button Test Console Log');
  }

}
