import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
<<<<<<< HEAD
=======
import {MenuController} from 'ionic-angular';
import {Pagina1Page} from '../pagina-1/pagina-1';
import {Pagina2Page} from '../pagina-2/pagina-2';

>>>>>>> 0ef1e83780b7deb31382f3ee7f0eb53351f58ecc

@Component({
  templateUrl: 'build/pages/home/home.html'
})
<<<<<<< HEAD
export class HomePage {
  constructor(private navCtrl: NavController) {

  }
=======

export class HomePage {

  private pagina1 = Pagina1Page;
  private pagina2 = Pagina2Page;

  constructor(private navCtrl: NavController, private menuCtrl: MenuController) {

  }

  openPage(page) {
    // Reset the nav controller to have just this page
    // we wouldn't want the back button to show in this scenario
    this.navCtrl.setRoot(page);

    // close the menu when clicking a link from the menu
    this.menuCtrl.close();
  }

>>>>>>> 0ef1e83780b7deb31382f3ee7f0eb53351f58ecc
}
