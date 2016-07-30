import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Pagina2Page} from '../pagina-2/pagina-2';

/*
  Generated class for the Pagina1Page page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/pagina-1/pagina-1.html',
})
export class Pagina1Page {

  constructor(private nav: NavController) {

  }
  irPagina2(){
    //push another page onto the history stack
    //causing the nav controller to animate the new page in
    this.nav.push(Pagina2Page);
  }
}
