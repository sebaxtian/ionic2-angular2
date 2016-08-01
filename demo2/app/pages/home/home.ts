import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {MenuController} from 'ionic-angular';


@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
  constructor(private navCtrl: NavController, private menu: MenuController) {
    menu.enable(true);
  }
  openPage() {
    // close the menu when clicking a link from the menu
    this.menu.close();
  }
}
