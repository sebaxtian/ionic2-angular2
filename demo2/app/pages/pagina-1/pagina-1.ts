import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MenuController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { Pagina2Page } from '../pagina-2/pagina-2';
import { Form } from "angular2-schema-form";
import { Myschema } from '../../providers/myschema/myschema';

/*
  Generated class for the Pagina1Page page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  directives: [Form],
  templateUrl: 'build/pages/pagina-1/pagina-1.html',
  providers: [Myschema]
})
export class Pagina1Page {

  private home = HomePage;
  private pagina2 = Pagina2Page;

  //private mySchema = this.myschema.load();
  //mySchema: any = JSON.stringify(this.myschema.load());
  //mySchema: any;
  mySchema: any;

  constructor(private navCtrl: NavController, private menuCtrl: MenuController, private myschema: Myschema) {
    /*
    this.myschema.load().then(data => {
      this.mySchema = data;
      console.log("data: " + JSON.stringify(this.mySchema));
    });
    */
    this.mySchema = this.myschema.load().then(data => {
      this.mySchema = data;
      console.log("data0: " + JSON.stringify(this.mySchema));
    });
    console.log("Data0: " + JSON.stringify(this.mySchema));
  }

  /*
  myActions: any = {
    "submit": (form) => { form.submit(); },
    "reset": (form) => { form.submit(); },
    "debug": (form) => { alert(JSON.stringify(form.getModel())); }
  }
  */

  openPage(page) {
    // Reset the nav controller to have just this page
    // we wouldn't want the back button to show in this scenario
    this.navCtrl.setRoot(page);

    // close the menu when clicking a link from the menu
    this.menuCtrl.close();
  }

}
