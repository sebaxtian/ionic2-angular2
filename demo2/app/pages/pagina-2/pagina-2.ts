import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MenuController } from 'ionic-angular';
import { HomePage } from '../home/home';

/*
  Generated class for the Pagina2Page page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/pagina-2/pagina-2.html',
})
export class Pagina2Page {

  private home = HomePage;

  constructor(private navCtrl: NavController, private menuCtrl: MenuController) {

  }

  openPage(page) {
    // Reset the nav controller to have just this page
    // we wouldn't want the back button to show in this scenario
    this.navCtrl.setRoot(page);

    // close the menu when clicking a link from the menu
    this.menuCtrl.close();
  }

}
