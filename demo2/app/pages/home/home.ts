import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {MenuController} from 'ionic-angular';
import {Pagina1Page} from '../pagina-1/pagina-1';
import {Pagina2Page} from '../pagina-2/pagina-2';


@Component({
  templateUrl: 'build/pages/home/home.html'
})

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

}
