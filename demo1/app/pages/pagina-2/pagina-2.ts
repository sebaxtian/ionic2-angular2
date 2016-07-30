import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
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

  constructor(private nav: NavController) {

  }
  irRegresar(){
      this.nav.pop();
  }
  irHome(){
      this.nav.push(HomePage);
  }
}
