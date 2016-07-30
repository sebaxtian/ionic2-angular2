import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {Pagina1Page} from '../pagina-1/pagina-1';

@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
  constructor(private navCtrl: NavController) {

  }
  irPagina1(){
    //push another page onto the history stack
    //causing the nav controller to animate the new page in
    this.navCtrl.push(Pagina1Page);
  }
}
